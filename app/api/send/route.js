import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';



const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const response = await req.json()
    try {
        const { data, error } = await resend.emails.send({
            from: 'sagardbs@resend.dev',
            to: response.emailToSend,
            subject: response?.userName + " send you a file",
            react: EmailTemplate({ response }),
        });

        if (error) {
            return Response.json({ error });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error });
    }
}