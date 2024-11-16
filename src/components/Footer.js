import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-[#2F363F] py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
