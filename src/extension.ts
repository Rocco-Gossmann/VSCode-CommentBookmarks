// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "bookmarkcomments" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('bookmarkcomments.bm', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello VS Code!');

		const opts: Map<number, vscode.QuickPickItem> = new Map();

		if(!vscode.window.activeTextEditor) {
			vscode.window.showInformationMessage('CommentBookmarks: please open a File first');
			return;
		}

		vscode.window.activeTextEditor?.document.getText().split("\n").reduce( (idx, line) => {
			const hit = (/(\/\*|\/\/|--|#|\[\[)\s*BM:(.+)$/gm).exec(line);

			if(hit) {
				opts.set(idx, {"label": hit[2]});
			}
			idx++;

			return idx;
		}, 0);

		var acc: any;
		var range: any;
		vscode.window.showQuickPick(Array.from(opts.values())).then( (choice) => {

			if(choice) {
				return Array.from(opts.entries()).reduce( (acc, v) => {

					if(!acc && v[1] === choice) {
						const editor = vscode.window.activeTextEditor;
						range = editor?.document.lineAt(v[0]).range;
						if (range && editor) {
							acc = vscode.window.showTextDocument(editor.document, {
								viewColumn: editor.viewColumn,
								selection: new vscode.Selection(range.start, range.start),
								preserveFocus: false,
							}).then( (editor) => {
								editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
							});
							return acc;
						}
					}

					return acc;

				}, acc);
			}

		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
