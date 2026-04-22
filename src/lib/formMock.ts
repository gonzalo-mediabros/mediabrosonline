/**
 * Simulates a successful server response for a form submission.
 * Logs all submitted fields. Use for testing or external tooling.
 * NOT imported by Form.astro (is:inline) — logic is duplicated inline there.
 */
export async function simulateMockAction(
  data: FormData,
  delayMs = 1200
): Promise<Response> {
  console.log("[Form mock] datos enviados:", Object.fromEntries(data));
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  return new Response(null, { status: 200 });
}
