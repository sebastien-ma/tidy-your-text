import * as vscode from 'vscode';

export interface Command {
  register(context: vscode.ExtensionContext): void;
}