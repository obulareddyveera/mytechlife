import React from 'react';

const QuoteOne = () => {
    return (
        <section
            className="flex flex-col items-center justify-center h-fit bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/background/quote1.jpeg')" }}
        >
            <div className="flex items-center  flex-col justify-center p-5 shadow-2xl text-1xl mt-4 mb-4 font-Montserrat bg-white">
                <span>Good code is its own best documentation.</span>
                <span>As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer.” – Steve McConnell</span>
            </div>
        </section>
    )
}

export default QuoteOne;