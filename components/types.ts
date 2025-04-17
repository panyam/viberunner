// components/types.ts

export type SectionType = 'text' | 'drawing' | 'plot';

export interface DocumentMetadata {
  id: string; // UUID - Placeholder for now
  schemaVersion: string;
  // createdAt: string; // ISO 8601 timestamp - Omitted for simplicity for now
  lastSavedAt: string; // ISO 8601 timestamp
}

export type TextContent = string; // HTML content

export interface DrawingContent {
  format: string; // e.g., "excalidraw_json", "svg_xml", etc.
  data: object | string; // The actual drawing data (could be JSON object or SVG string)
}

export interface PlotContent {
  format: string; // e.g., "chartjs_config", "plotly_json", etc.
  data: object; // The configuration or data object for the plot
}

export interface BaseDocumentSection {
  id: string;
  title: string;
  order: number;
}

export interface TextDocumentSection extends BaseDocumentSection {
  type: 'text';
  content: TextContent;
}

export interface DrawingDocumentSection extends BaseDocumentSection {
  type: 'drawing';
  content: DrawingContent; // Placeholder content for now
}

export interface PlotDocumentSection extends BaseDocumentSection {
  type: 'plot';
  content: PlotContent; // Placeholder content for now
}

export type DocumentSection = TextDocumentSection | DrawingDocumentSection | PlotDocumentSection;

export interface LeetCoachDocument {
  metadata: DocumentMetadata;
  title: string;
  sections: DocumentSection[];
}
