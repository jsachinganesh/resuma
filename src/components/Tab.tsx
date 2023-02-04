import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => (
    <Tabs className="w-100" style={{overflowX:'hidden'}}>
        <TabList>
            <Tab>
                Work Experience
            </Tab>
            <Tab>Personal Projects</Tab>
        </TabList>

        <TabPanel>
            <div className=''> <h1 className='h4'>Bizgaze</h1> <span style={{ fontSize: '14px' }}>Nov-2021 to Present)</span></div>
            <div>During my time at the company, I successfully contributed to several important projects, including:</div>
            <ul>
                <li>
                    <div>
                        <div className=''> <h1 className='h5'>Bizgaze</h1> <span className='text-success' style={{ fontSize: '14px' }}><strong>Typescript,Jquery,Bootstrap</strong>)</span></div>
                        <ol>
                            <li>Developed a Tree view chart from scratch that facilitates setting conditions for notifications and enhanced the user experience.</li>
                            <li>Worked on an Email Template builder, allowing users to build HTML emails easily with a variety of drag-and-drop templates.
                            </li>
                            <li>Improved the UI of the GPS Tracking module to enhance the company's ability to track its sales employees more efficiently.
                            </li>
                            <li>Created a user-friendly UI for the finance module, displaying company P/L and Balance sheet. This involved collaborating with the finance team to ensure the project met their requirements.
                            </li>
                            <li>Developed a Progressive Web Application for the CRM, delivering a seamless user experience for customers.
                            </li>
                            <li>
                                Tackled UI bugs and built small features such as carousels, kanban, list, and card views to present data in a more organized manner.
                            </li>
                        </ol>
                    </div>
                </li>
                <hr className="pb-0" />
                <li>
                    <div>

                        <div className=''> <h1 className='h5'>Hireserver Cloud</h1> <span className='text-success' style={{ fontSize: '14px' }}><strong>React,Redux,Bootstrap</strong></span></div>
                        <ol>
                            <li>
                                Implemented a user-friendly interface that allows users to easily manage their cloud resources.
                            </li>
                            <li>
                                Implemented authorization and authentication to ensure data security and user access control.
                            </li>
                            <li>
                                Made complex forms for creating machines and firewalls with help of context API.
                            </li>
                            <li>
                                Developed reusable components to improve maintainability and reduce development time.
                            </li>
                            <li>
                                Displayed machine usage data with Chart.js for easy visualization and monitoring.
                            </li>
                            <li>Optimized the application for performance.
                            </li>
                            <li>Gained experience with cloud infrastructure and project management.</li>
                        </ol>
                    </div>
                </li>
                <hr className="pb-0" />
                <li>
                    <div>

                        <div className=''> <h1 className='h5'>Anwi System</h1> <span className='text-success' style={{ fontSize: '14px' }}><strong>Html,Css,Sass,Bootstrap,Javascript</strong></span></div>
                        <ol>
                            <li>
                                Built a highly engaging and user-friendly landing page for the company's product line, showcasing their laptops and desktops.

                            </li>
                            <li>
                                Used animation libraries such as scroll magic and GSAP for the animation.

                            </li>
                            <li>
                                Collaborated closely with the branding and UI designer to create a Anwi systems website
                            </li>
                        </ol>
                    </div>
                </li>
                <hr className="pb-0" />
                <li>
                    <div>

                        <div className=''> <h1 className='h5'>Event Booking</h1> <span className='text-success' style={{ fontSize: '14px' }}><strong>Javascript,Html/Css,Bootstrap</strong></span></div>
                        <ol>
                            <li>
                                Built a user interface that prioritizes ease of use, allowing users to quickly and easily book events.


                            </li>
                            <li>
                                Implemented a photo gallery feature to allow users to view event photos.

                            </li>
                            <li>
                                Developed login and logout functionality for personalized user experience.
                            </li>
                            <li>
                                Implemented profile picture upload feature for personalization.
                            </li>
                        </ol>
                    </div>
                </li>
            </ul>
        </TabPanel>
        <TabPanel>
            Work in progress
        </TabPanel>
    </Tabs>
);