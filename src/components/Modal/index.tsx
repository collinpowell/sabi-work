/** @jsxImportSource theme-ui */

import { Box, Label, Heading, Flex, Text, Input, Grid, Button } from "theme-ui";
import Modal from "react-modal";
const APIURL = ''
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "none",
        borderRadius: "24px",
        maxWidth: "480px",
        width: "-webkit-fill-available",
        padding: "0",
        backgroundColor: "#E2F4FE",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: "1234567",
        overflowY: "auto",
    },
};
const w = 205;
const h = 200;

//Modal.setAppElement('#here');

const WaitlistModal = ({ header, modalIsOpen, setIsOpen }: any) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles as any}
            closeTimeoutMS={500}
            contentLabel="Example Modal"
        >
            <Box sx={{
                width:'100%'
            }}>
                <Box sx={{
                    position: "relative",
                    textAlign: "center",
                    h1: {
                        fontSize: ["18px", null, null, "20px"],
                        wordWrap: "break-word",
                        position: "relative",
                        maxWidth: "411px",
                        mr: "auto",
                        ml: "auto",
                        mb: "20px",
                        mt: "20px",
                        whiteSpace: "initial",
                    },
                }}>
                    <Heading as="h1" sx={{ textAlign: "center" }}>
                        {header}
                    </Heading>
                    <svg
                        style={{
                            position: "absolute",
                            right: "0",
                            top: "0",
                            marginRight: "25px",
                        }}
                        onClick={closeModal}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M18 6L6 18"
                            stroke="#012032"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 6L18 18"
                            stroke="#012032"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Box>
                <RequestService />
            </Box>
        </Modal>
    );
};

export default WaitlistModal;

const RequestService = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [company, setCompany] = useState("");
    //do something else
    async function submitHandle() {
        if (name == "" || email == "" || mobileNumber == "") {
            toast.error("Some Fields Are Empty");
            return;
        }
        const id = toast.loading("Uploading Data...");

        try {
            const res = await axios.post(APIURL + "/api/near/sponsors", {
                name,
                email,
                mobileNumber,
                type: "SPONSOR",
            });

            console.log(id, "sending Data", name, email, mobileNumber, company);

            await axios.post("/api/requestService", {
                name: name,
                email: email,
                phone: mobileNumber,
                company: company,
            });
            console.log(res);
            toast.update(id, {
                render: res.data.message,
                type: "success",
                isLoading: false,
                autoClose: 3000,
                hideProgressBar: false,
            });
        } catch (error) {
            console.log(error);
            // if (error?.response?.data) {
            //     toast.update(id, {
            //         render: error.response.data.message,
            //         type: "error",
            //         isLoading: false,
            //         autoClose: 3000,
            //         hideProgressBar: false,
            //     });
            // } else {
            //     toast.update(id, {
            //         render: error.message,
            //         type: "error",
            //         isLoading: false,
            //         autoClose: 2000,
            //         hideProgressBar: false,
            //     });
            // }
        }
    }
    return (
        <Box as="form" sx={styles.form}>
            <Grid width={[250, null, 400]} gap={2} columns={[2, "1fr 2fr"]}>
                <Box>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        name="fullName"
                        id="fullName"
                        onChange={(e) => setName(e.target.value)}
                        mb={3}
                        value={name}
                        placeholder="Google"
                    />
                </Box>
                <Box>
                    <Label htmlFor="company">Company</Label>
                    <Input
                        name="company"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        mb={3}
                        placeholder="Google"
                    />
                </Box>
                <Box>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        mb={3}
                        value={email}
                        placeholder="example@google.com"
                    />
                </Box>
                <Box>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        onChange={(e) => setMobileNumber(e.target.value)}
                        type="number"
                        name="phone"
                        id="phone"
                        value={mobileNumber}
                        mb={3}
                        placeholder="+234 701 331 5567"
                    />
                </Box>
            </Grid>
            <br />
            <Button type="button" sx={{ width: "100%" }} onClick={submitHandle}>
                Submit
            </Button>
        </Box>
    );
};

const styles = {
    quans: {
        color: "#000",
        backgroundColor: "#F0F0F0",
        fontWeight: "500",
        fontSize: "20px",
        width: "27px",
        height: "27px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        borderRadius: "50%",
    },
    section: {
        pt: "70px",
        pb: "70px",
        px: "20px",
    },
    container: {
        color: "#fff",
        textAlign: ["center", null, null, "left"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        p: {
            fontSize: ["15px", null, null, null, "18px", "20px"],
        },
    },
    form: {
        backgroundColor: "#fff",
        px: "20px",
        pb: "25px",
        pt: "5px",
    },
    cardTitle: {
        textAlign: ["center", null, null, "left"],
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: ["28px", null, "34px", "41px"],
        lineHeight: "45px",
        span: {
            fontSize: ["25px", null, null, null, "30px", " 36px"],
            mb: [4, null, null, 5, 5, 5],
            mt: [4, null, null, 5, 5, 5],
            fontStyle: "normal",
            fontWeight: 400,
            opacity: 0.8,
            lineHeight: "48px",
            letterSpacing: "0em",
        },
    },
    heading: {
        position: "relative",
        textAlign: "center",
        h1: {
            fontSize: ["18px", null, null, "20px"],
            wordWrap: "break-word",
            position: "relative",
            maxWidth: "411px",
            mr: "auto",
            ml: "auto",
            mb: "20px",
            mt: "20px",
            whiteSpace: "initial",
        },
    },
};
