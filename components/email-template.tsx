import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
}
