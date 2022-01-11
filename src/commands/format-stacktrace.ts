import * as vscode from 'vscode';

import { Command } from "../command";

function formatStacktrace(text: string): string {
  if (text === null || text.length === 0) {
    return text;
  }
  return text.replace(/\\n/gm, "\n").replace(/\\t/gm, ' '.repeat(2));
}

function callback(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
  let hasSelection = false;
  let source;
  let location;
  if (!textEditor.selection.isEmpty) {
    source = textEditor.document.getText(textEditor.selection);
    location = textEditor.selection;
    hasSelection = true;
  } else {
    source = textEditor.document.getText();
    location = new vscode.Range(textEditor.document.positionAt(0), textEditor.document.positionAt(source.length));
    hasSelection = false;
  }
  if (source !== null && source.length > 0) {
    edit.replace(location, formatStacktrace(source));
  }
}

export class FormatStacktraceCommand implements Command {

  readonly id: string = "tidy-your-text.format-stacktrace";

  register(context: vscode.ExtensionContext): void {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand(this.id, callback));
  }

}
