import { useEffect } from 'react';
import mermaid from 'mermaid';

type FlowchartCurve = 'basis' | 'linear' | 'cardinal';

interface FlowchartConfig {
  diagramPadding?: number;
  nodeSpacing?: number;
  rankSpacing?: number;
  curve?: FlowchartCurve;
  htmlLabels?: boolean;
  useMaxWidth?: boolean;
}

interface MermaidConfig {
  fontSize?: number;
  flowchart?: FlowchartConfig;
}

interface MermaidDiagramProps {
  chart: string;
  className?: string;
  config?: MermaidConfig;
  style?: React.CSSProperties;
}

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export const MermaidDiagram = ({ chart, className, config, style }: MermaidDiagramProps) => {
  useEffect(() => {
    if (config) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        fontSize: config.fontSize,
        flowchart: config.flowchart
      });
    }
    mermaid.contentLoaded();
  }, [chart, config]);

  return (
    <div className={`mermaid ${className || ''}`} style={style}>
      {chart}
    </div>
  );
};
