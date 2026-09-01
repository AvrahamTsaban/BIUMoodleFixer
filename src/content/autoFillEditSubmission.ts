import { log } from '../utils'

const EDIT_SUBMISSION_SUFFIX = 'action=editsubmission'

function checkInput(inputId: string) {
	const input = document.getElementById(inputId) as HTMLInputElement | null
	if (!input) return

	input.checked = true
	input.dispatchEvent(new Event('change', { bubbles: true }))
}

function fillAuthorName(authorName: string) {
	const input = document.getElementById('text22116') as HTMLInputElement | null
	if (!input) return

	input.value = authorName
	input.dispatchEvent(new Event('input', { bubbles: true }))
	input.dispatchEvent(new Event('change', { bubbles: true }))
}

interface Settings {
	autoFillEditSubmission?: boolean
	autoFillEditSubmissionText?: string
}

export function autoFillEditSubmission(settings: Settings) {
	if (!settings.autoFillEditSubmission) return
	if (!window.location.href.endsWith(EDIT_SUBMISSION_SUFFIX)) return

	checkInput('originality-checkbox')
	checkInput('checkbox_24625')
	if (typeof settings.autoFillEditSubmissionText === 'string' && settings.autoFillEditSubmissionText) {
		fillAuthorName(settings.autoFillEditSubmissionText)
	}
	log('Auto-fill for edit submission applied')
}
