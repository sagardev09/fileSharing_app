import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import banner from "@/public/banner.png"
import build from "@/public/build.png"



export const EmailTemplate = ({
    response
}) => (
    <Html>
        <Head />
        <Preview>File-Share</Preview>
        <Body style={main}>
            <Container>

                <Section style={content}>
                    <Img width={620} src={"https://images.unsplash.com/photo-1702141917527-8bcd2ebf5a77?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

                    <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                        <Column>
                            <Heading
                                style={{
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >   sagardbs8121@gmail.com
                                Hi {response?.emailToSend.split("@")[0]},
                            </Heading>
                            <Heading
                                as="h2"
                                style={{
                                    fontSize: 26,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                Someone shared  files with you
                            </Heading>

                            <Text style={paragraph}>
                                <b>Filename: {response.fileName} </b>
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                <b>Filetype : {response.fileType} </b>
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                <b>FileSize :{response.fileSize} </b>
                            </Text>
                            <Text
                                style={{
                                    color: 'rgb(0,0,0, 0.5)',
                                    fontSize: 14,
                                    marginTop: -5,
                                }}
                            >
                                File shared by : {response.userName}
                            </Text>

                            <Text style={paragraph}>
                                If its not for you ,ignore the email.
                            </Text>
                            <Text style={{ ...paragraph, marginTop: -5 }}>
                                If you have additional questions, please
                                see our support page.
                            </Text>
                        </Column>
                    </Row>
                    <Row style={{ ...boxInfos, paddingTop: '0' }}>
                        <Column style={containerButton} colSpan={2}>
                            <Button style={button} href={response?.shortUrl}>Download</Button>
                        </Column>
                    </Row>
                </Section>

                <Section style={containerImageFooter}>
                    <Img width={620} src={"https://images.unsplash.com/photo-1702141917527-8bcd2ebf5a77?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </Section>

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 12,
                        color: 'rgb(0,0,0, 0.7)',
                    }}
                >
                    © 2024 | FileShare Inc., 350 Mission Street, Gurgaon, CA 124102,
                    INDIA | www.fileshare.com
                </Text>
            </Container>
        </Body>
    </Html>
);


const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: '30px 20px',
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover"
};

const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
};

const button = {
    backgroundColor: '#e00707',
    padding: '12px 30px',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
};

const boxInfos = {
    padding: '20px 40px',
};

const containerImageFooter = {
    padding: '45px 0 0 0',
};
