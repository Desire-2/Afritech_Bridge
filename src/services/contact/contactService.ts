export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  inquiryType?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitContactForm(data: ContactPayload): Promise<ContactResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to deliver message. Please try again or reach out directly.');
  }

  return result;
}
