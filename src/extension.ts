import * as vscode from 'vscode';

import { RemoveColorCodeCommand } from './commands/remove-color-code';
import { FormatStacktraceCommand } from './commands/format-stacktrace';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension [tidy-your-text] activated');

	new RemoveColorCodeCommand().register(context);
	new FormatStacktraceCommand().register(context);
}

export function deactivate() {
	console.log('Extension [tidy-your-text] deactivated');
}
