import { defineMonacoThemes, LANGUAGE_CONFIG } from '@/contants';
import { useTheme } from '@/providers/theme-provider';
import { useMonaco } from '@monaco-editor/react';
import { Editor } from '@monaco-editor/react';
import React, { useEffect, useState, useRef } from 'react';

const CodeEditor = ({ language, defaultFontSize = 16 , code , setCode}) => {
  const monaco = useMonaco();
  const { theme } = useTheme();
 
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const editorRef = useRef(null);

  useEffect(() => {
    if (LANGUAGE_CONFIG[language]) {
      setCode(LANGUAGE_CONFIG[language].defaultCode);
    }
  }, [language]);

  useEffect(() => {
    if (monaco) {
      defineMonacoThemes(monaco);
      monaco.editor.setTheme(theme);
    }
  }, [monaco, theme]);

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const newFontSize = fontSize + (e.deltaY > 0 ? -2 : 2);
      if (newFontSize >= 12 && newFontSize <= 36) {
        setFontSize(newFontSize);
      }
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getEditor?.();
      if (editorInstance) {
        editorInstance.updateOptions({ fontSize });
      }
    }
  }, [fontSize]);

  return (
    <div className="h-[100%]" onWheel={handleWheel}>
      <Editor
        height="100%"
        language={LANGUAGE_CONFIG[language]?.monacoLanguage || 'javascript'}
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{
          fontSize: fontSize,
          mouseWheelZoom:true,
          wordWrap:true
          
        }}
        
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  );
};

export default CodeEditor;
