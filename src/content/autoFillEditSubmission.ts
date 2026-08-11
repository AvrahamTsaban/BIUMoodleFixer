import { log } from '../utils'

const AUTHOR_NAME = 'ChatGPT'
const EDIT_SUBMISSION_SUFFIX = 'action=editsubmission'

function checkInput(inputId: string) {
	const input = document.getElementById(inputId) as HTMLInputElement | null
	if (!input) return

	input.checked = true
	input.dispatchEvent(new Event('change', { bubbles: true }))
}

function fillAuthorName() {
	const input = document.getElementById('text22116') as HTMLInputElement | null
	if (!input) return

	input.value = AUTHOR_NAME
	input.dispatchEvent(new Event('input', { bubbles: true }))
	input.dispatchEvent(new Event('change', { bubbles: true }))
}

export function autoFillEditSubmission() {
	if (!window.location.href.endsWith(EDIT_SUBMISSION_SUFFIX)) return

	checkInput('originality-checkbox')
	checkInput('checkbox_24625')
	fillAuthorName()
	log('Auto-fill for edit submission applied')
}
