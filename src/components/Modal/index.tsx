/** @jsxImportSource theme-ui */

import { Box, Label, Heading, Text, Input, Spinner, Grid, Button, Flex } from "theme-ui";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useToast } from "../useToast";
import { cn } from "@/lib/utils";
import CustomDropdown from "../CustomSelect";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "none",
        borderRadius: "20px",
        boxShadow: 'inset 0px -12px 0px #1741CC',
        width: "-webkit-fill-available",
        maxHeight: '99%',
        padding: "0",
        paddingBottom: "30px",
        background: "linear-gradient(180deg, #EDF1FD 43.88%, #FFFFFF 70.04%)",
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: "1234567",
        overflowY: "auto",
    },
};
const w = 205;
const h = 200;


const WaitlistModal = ({ modalIsOpen, phone, setIsOpen }: any) => {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles as any}
            closeTimeoutMS={500}
            contentLabel="Modal">
            <Box sx={{
                width: '100%',
            }}>
                <Box sx={{
                    position: "relative",
                    textAlign: "left",
                    padding: ['15px'],
                    h2: {
                        fontSize: ['20px', null, null, '32px']
                    }
                }}>
                    <Heading sx={{ textAlign: "left", lineHeight: ['30px', null, null, '50px'] }}>
                        Join the Waiting List
                    </Heading>
                    <Text as='p' sx={{ fontSize: ['13px', null, null, '16px'], maxWidth: '98%' }}>Be among the first to access our app, we&apos;re driven to empower your skills and business, fueling unparalleled growth and success.</Text>
                    <svg sx={{
                        position: "absolute",
                        right: "0",
                        top: ['15px', null, null, "20px"],
                        size: ['30px', null, null, '40px'],
                        marginRight: "25px",
                    }} onClick={closeModal} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9999 14.9999L19.9999 19.9999M19.9999 19.9999L14.9999 24.9999M19.9999 19.9999L24.9999 24.9999M19.9999 19.9999L14.9999 14.9999M36.6666 19.9999C36.6666 29.2047 29.2047 36.6666 19.9999 36.6666C10.7952 36.6666 3.33325 29.2047 3.33325 19.9999C3.33325 10.7952 10.7952 3.33325 19.9999 3.33325C29.2047 3.33325 36.6666 10.7952 36.6666 19.9999Z" stroke="#1741CC" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                </Box>
                <RequestService phone={phone} closeModal={closeModal} />
            </Box>
        </Modal>
    );
};

/**
 * 

position: absolute;
width: 740px;
height: 976px;
left: calc(50% - 740px/2 - 21px);
top: calc(50% - 976px/2 - 10px);

background: #FFFFFF;
box-shadow: inset 0px -12px 0px #1741CC;
border-radius: 20px;

 */

export default WaitlistModal;

const statez = ["Abia", "Adamawa", "AkwaIbom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Rivers", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Sokoto", "Taraba", "Yobe", "Zamfara"]

const RequestService = ({ phone, closeModal }: any) => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [locationInfo, setLocationInfo] = useState<any>();
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState(phone);
    const [service, setService] = useState("");
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    //do something else

    async function addItem() {
        const res = await fetch('/api/hello', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, mobileNumber, service, state, town }),
        });

        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        getLocationInfo()
    }, [])

    async function getLocationInfo() {
        try {
            const res = await fetch('https://nigeria-states-towns-lga.onrender.com/api/all');

            const data = await res.json();
            console.log(data);
            setLocationInfo(data)
        } catch (error: any) {
        }

    }

    async function submitHandle() {
        if (name == "" || mobileNumber == "" || service == "") {
            alert("Some Fields Are Empty");
            return;
        }
        setLoading(true)


        try {
            await addItem()
            closeModal()

            toast({
                className: cn(
                    "top-0 right-0 left-0 mx-auto flex fixed md:max-w-[400px] md:top-4 md:right-4"
                ),
                title: "Success",
                description: "Joined Successfully!",
            });
        } catch (error) {
            console.log(error);
            alert('Failed,Try Again')
        }
        setLoading(false)

    }
    return (
        <Box as="form" sx={styles.form}>
            <Grid width={[250, null, 400]} gap={2} columns={[2, "1fr 2fr"]}>
                <Box >
                    <Label mb={1} htmlFor="fullName">Full Name <span>*</span></Label>
                    <Input
                        name="fullName"
                        id="fullName"
                        onChange={(e) => setName(e.target.value)}
                        mb={2}
                        value={name}
                        placeholder="Type your name here..."
                    />
                </Box>
                <Box>
                    <Label mb={1} htmlFor="phone">Phone Number <span>*</span></Label>
                    <Input
                        onChange={(e) => setMobileNumber(e.target.value)}
                        type="number"
                        name="phone"
                        id="phone"
                        value={mobileNumber}
                        mb={2}
                        placeholder="070 0000 0000"
                    />
                </Box>
                <Box>
                    <Label mb={1} htmlFor="company">Service you offer <span>*</span></Label>
                    <Input
                        name="company"
                        id="company"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        mb={2}
                        placeholder="e.g. Painter, carpenter, electrician, cleaner..."
                    />
                </Box>

                <Flex sx={{
                    gap: '5px',
                }}>
                    <CustomDropdown label={'State'} options={statez} onSelect={(option: any) => setState(option)} />
                    {/* <CustomDropdown label={'Town/Region'} options={locationInfo?.find((item: { name: any }) => item.name == state)?.towns.map((item: { name: any; }) => item.name)} onSelect={(option: any) => setTown(option)} /> */}
                </Flex>
                <Box>
                    <Label mb={1} htmlFor="email">Email (optional)</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        mb={2}
                        value={email}
                        placeholder="example@google.com"
                    />
                </Box>
            </Grid>
            <br />
            <Button type="button" disabled={loading || !name || !mobileNumber || !service} sx={{
                width: "100%", border: '1px solid #E6E6E6',
                borderRadius: '100px',
                //opacity: '0.4',
                p: ['10px 24px', null, null, '14px 24px'],
                ':disabled': {
                    opacity: '0.4'
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }} onClick={submitHandle}>
                {loading ? (
                    <Spinner
                        sx={{
                            color: 'background',
                            height: '20px'
                        }}
                    />
                ) : (
                    'Join the wait list')}
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
        borderTop: '6px solid #1741CC',
        color: '#252627',
        fontSize: ['12px', null, null, '14px'],
        fontWeight: '400',
        px: "20px",
        pt: "15px",
        span: {
            color: 'red',
            ml: '5px'
        },
        'input,select': {
            border: '1px solid #E6E6E6',
            borderRadius: '12px',
            p: ['10px 24px', null, null, '14px 24px']

        }
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
