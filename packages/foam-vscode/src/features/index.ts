import { FoamFeature } from '../types';
import * as commands from './commands';
import dateSnippets from './date-snippets';
import hoverProvider from './hover-provider';
import completionProvider from './link-completion';
import tagCompletionProvider from './tag-completion';
import linkDecorations from './document-decorator';
import navigationProviders from './navigation-provider';
import wikilinkDiagnostics from './wikilink-diagnostics';
import refactor from './refactor';

export const features: FoamFeature[] = [
  ...Object.values(commands),
  refactor,
  navigationProviders,
  wikilinkDiagnostics,
  dateSnippets,
  hoverProvider,
  linkDecorations,
  completionProvider,
  tagCompletionProvider,
];
