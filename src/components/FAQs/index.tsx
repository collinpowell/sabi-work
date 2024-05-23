import { Text, Container, Heading, Box, Flex } from "theme-ui"
import { useState } from "react"
import style from './style.module.css'

const ArrowRight = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

    );
}

const QuestionMark = () => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9052 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9052 15 16.6667M19.6873 27.1874H20.3123M19.6873 27.8124H20.3123M15.6667 35H24.3333C28.067 35 29.9339 35 31.3599 34.2734C32.6143 33.6342 33.6342 32.6143 34.2734 31.3599C35 29.9339 35 28.067 35 24.3333V15.6667C35 11.933 35 10.0661 34.2734 8.64006C33.6342 7.38565 32.6143 6.36578 31.3599 5.72662C29.9339 5 28.067 5 24.3333 5H15.6667C11.933 5 10.0661 5 8.64006 5.72662C7.38565 6.36578 6.36578 7.38565 5.72662 8.64006C5 10.0661 5 11.933 5 15.6667V24.3333C5 28.067 5 29.9339 5.72662 31.3599C6.36578 32.6143 7.38565 33.6342 8.64006 34.2734C10.0661 35 11.933 35 15.6667 35ZM20.8333 27.5C20.8333 27.9602 20.4602 28.3333 20 28.3333C19.5398 28.3333 19.1667 27.9602 19.1667 27.5C19.1667 27.0398 19.5398 26.6667 20 26.6667C20.4602 26.6667 20.8333 27.0398 20.8333 27.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

    );
}

const faq = [
    {
        question: 'How soon will I get a job?',
        answer: 'NodeX iHub is an Edtech platform created for engineering students and graduates to learn and gain industry experience. We offer a variety of courses in Embedded Systems, Embedded AI, and the Internet of Things.'
    },
    {
        question: 'Is sabiwork free?',
        answer: 'Our courses are designed for engineering students and graduates who are interested in gaining practical skills and industry experience in the field of embedded systems.'
    },
    {
        question: 'How will I get paid?',
        answer: 'At NodeX iHub, we offer a unique and immersive learning experience that focuses on hands-on learning and practical skills. Our courses are designed by industry experts and include real-world projects that will help you build your portfolio and stand out in the job market. Plus, with our flexible online platform, you can learn at you r own pace and on your own schedule.'
    },
    {
        question: 'Can I get banned from sabiwork?',
        answer: "Yes! We offer a 14-day free trial for all of our courses, so you can try them out and see if they're the right fit for you."
    },
    {
        question: 'What happens when I reject a job 5 times?',
        answer: "You can enroll in a course by visiting our Explore Page and selecting the course you're interested in. From there, you can create an account and start your learning journey."
    },
    {
        question: 'Is sabiwork nationwide?',
        answer: 'Yes, we offer a certificate of completion for all of our courses. This certificate can be added to your portfolio and shared with potential employers to showcase your skills and experience.'
    },

]
const FAQ = () => {
    const [drop, setDrop] = useState<any>()
    return (
        <Container sx={{
            mb: '140px'
        }} id="faq">
            <Heading className={style.title} >FAQs</Heading>
            <Box sx={{
                textAlign: 'center',
                background: '#03091C',
                color: 'white',
                padding: ['50px', null, null, '100px'],
                borderRadius: '50px',
                h2: {
                    mb: '64px'
                }
            }}>
                <Box sx={{
                    textAlign: 'left',
                }}>
                    {faq.map(({ question, answer }, i) => {
                        return (


                            <Box key={i} sx={{
                                h4: {
                                    my: 'auto',
                                },
                                '.block': {
                                    display: 'block',
                                },
                                '.none': {
                                    display: 'none'
                                },
                                p: {
                                    mb: '32px',
                                    //transition: 'all 4s ease-in-out 1s',
                                },
                                hr: {
                                    height: '1px',
                                    border: '0.4px solid rgba(153, 153, 153, 0.5)'
                                },
                                svg: {
                                    my: '32px',
                                    mr: '16px'
                                }
                            }} onClick={() => {
                                setDrop({
                                    drop: !drop?.drop,
                                    i
                                })
                            }}>
                                <Flex sx={{
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{
                                        display: 'flex'
                                    }}>
                                        <QuestionMark />
                                        <Text as='h4'>{question}</Text>
                                    </Box>
                                    <Box sx={{
                                        my: 'auto'
                                    }}>
                                        <ArrowRight />
                                    </Box>
                                </Flex>
                                <Text as='p' variant="normal" className={drop && drop.i == i && drop.drop ? 'block' : 'none'}>{answer}</Text>
                                <hr />
                            </Box>
                        )
                    })}

                </Box>
            </Box>
        </Container>

    )
}

export default FAQ;
