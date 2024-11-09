const Contact = ()=>{
    return(
        
        <div className="contact  bg-green-100 p-10 my-10">
        
            <h1 className="font-bold text-xl text-center">Contact Us</h1>
            <div className="flex justify-between">
                <div>
                    {//<h2>Call us @ 011-95728120</h2>
                    //<h2>helpdesk@fastfood.com</h2>
                    }
                </div>
                <div>
                    {//<h2 className="font-semibold"> Address </h2>
}
                    <ul>
                        <li>Akshya Nagar 1st Block </li>
                        <li>20th Street, Rammurthy nagar</li>
                        <li>Bangalore-560016</li>
                    </ul>
                </div>
            </div>
            <form className="mt-10">
                <input type="text" 
                placeholder="Name" 
                className="m-4 text-center"/>
                <input type="text" placeholder="Email-Id" className="m-4 text-center"/>
                <input type="text" placeholder="Message" className="m-4 text-center"/>
                <button className="bg-emerald-500 p-2 rounded-lg shadow-xl">Submit</button>
            </form>
        </div>
    )
}

export default Contact;





