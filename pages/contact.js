
export default function Contact() {

    return (
        <>
            <div className="">
                <div className="row">
                    <div className="col xl4 l3 m2 s1"></div>
                    <div className="col xl4 l6 m8 s10 center-align">
                        <div>
                            <br/>
                            <br/>
                            <h4>Information</h4>
                            <br/><br/>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1770.2251549214545!2d-79.32655822247024!3d43.84922995483986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d45b25669ba1%3A0xdf8e08d7c524d302!2sBirchmount%20Rd%20%26%20Enterprise%20Blvd%2C%20Markham%2C%20ON%20L6G%200E7!5e1!3m2!1sen!2sca!4v1704658368120!5m2!1sen!2sca" 
                                className="map"
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <br/><br/>
                            <big>
                                1578 Eagle Eye Rd.  Mississauga 
                                <br/>ON  T6R 2B7
                                <br/><br/>
                                (647) – 742 – 2281
                                <br/><br/>
                                GoldenAbaloneB@yahoo.ca    
                            </big>
                            <br/><br/>
                            <h4>Store Hours</h4>
                            <br/><br/>
                            <div className="hours center-align">
                                <big>
                                    Mon – Fri
                                    <li>7am – 11pm</li>
                                    Sat – Sun
                                    <li>8:30am – 2am</li>
                                </big>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <div className="col xl4 l3 m2 s1"></div>
                </div>
            </div>
        </>
    )
}