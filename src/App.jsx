import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./providers/theme-provider";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Output from "./components/Output";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LANGUAGE_CONFIG } from "./contants";

const App = () => {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [panelSizes, setPanelSizes] = useState([50, 50]); // Initial sizes for panels
  
  const handleRun = async () => {
    const timeout = 10000; 
    const controller = new AbortController(); 
    const timeoutId = setTimeout(() => controller.abort(), timeout);
  
    try {
      setLoading(true);
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: language,
          version: LANGUAGE_CONFIG[language].pistonRuntime.version,
          files: [
            {
              content: code,
            },
          ],
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId); 
  
      const data = await response.json();
      if (data.run.stderr) {
        setOutput({ state: "e", data: data.run.stderr });
      } else {
        setOutput({ state: "s", data: data.run.stdout });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setOutput({ state: "e", data: "Request timed out" }); 
      } else {
        setOutput({ state: "e", data: "An error occurred: " + error.message });
      }
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (output) {
      // Adjust panel sizes dynamically when output changes
      setPanelSizes((prevSizes) => {
        const editorSize = prevSizes[0];
        const outputSize = prevSizes[1];
        if (outputSize < 25) {
          return [50, 50]; // Reset to equal sizes if output is too small
        }
        return [editorSize, outputSize];
      });
    }
  }, [output]);

  const handleResize = (sizes) => {
    setPanelSizes(sizes); // Update state on manual resize
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col">
        <Navbar
          handleRun={handleRun}
          loading={loading}
          language={language}
          setLanguage={setLanguage}
        />
        <div className="flex-1 flex p-4 overflow-hidden">
          <ResizablePanelGroup
            direction="horizontal"
            className="w-full h-full rounded-lg border"

          >
            <ResizablePanel
            defaultSize={50}
            >
              <div className="h-full flex flex-col">
                <label className="text-lg mb-2 ml-2">Code Editor</label>
                <CodeEditor language={language} code={code} setCode={setCode} />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel
            defaultSize={50}
            >
              <div className="h-full flex flex-col">
                <label className="text-lg mb-2 ml-2">Output</label>
                <Output output={output} setOutput={setOutput} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
