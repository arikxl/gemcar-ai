"use client";
import React, { useState } from "react";


const WaitListPage =  () => {

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch("/api/db/waitlist-entries", {
                method: "POST",
                body: JSON.stringify({
                    query:
                        "INSERT INTO `waitlist` (`email`, `signup_date`) VALUES (?, ?)",
                    values: [email, new Date().toISOString()],
                }),
            });
            setSubmitted(true);
            setEmail("");
            setError("");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#0D0D1D] text-white font-december">
            {/* Navigation */}
            <nav className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <img
                        src="https://ucarecdn.com/91f245e0-f135-46d7-8acf-259b63b56ed4/-/format/auto/"
                        alt="GemCar AI Logo"
                        className="h-16 w-auto"
                    />
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-[#6C63FF] to-[#4A45B2] text-transparent bg-clip-text">
                            The future of car buying is here.
                        </h1>

                        <p className="text-xl text-gray-400 mb-8">
                            Transform your car buying experience with our innovative
                            marketplace. Connect with sellers, explore detailed listings, and
                            make informed decisions with our comprehensive platform.
                        </p>

                        {!submitted ? (
                            <div className="space-y-6">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-[#6C63FF] rounded-lg font-medium hover:bg-[#5B54FF] transition-colors duration-200 whitespace-nowrap"
                                    >
                                        Join Waitlist
                                    </button>
                                </form>
                                {error && <p className="text-red-400 mt-2">{error}</p>}
                                <p className="text-sm text-gray-500">
                                    Be the first to experience the future of car buying 🚗
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white/5 border border-gray-800 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                                <p className="text-gray-400">
                                    Thanks for joining! We'll keep you updated on our launch.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Features */}
                    <div className="space-y-8 lg:pl-12">
                        <div className="bg-white/5 border border-gray-800 p-6 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="text-[#6C63FF] text-2xl">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                                    <p className="text-gray-400">
                                        Find your perfect car with our advanced AI-powered search
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-gray-800 p-6 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="text-[#6C63FF] text-2xl">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Secure Transactions
                                    </h3>
                                    <p className="text-gray-400">
                                        Safe and transparent buying process
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-gray-800 p-6 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="text-[#6C63FF] text-2xl">
                                    <i className="fas fa-car"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Verified Listings
                                    </h3>
                                    <p className="text-gray-400">
                                        Every car is verified for quality and accuracy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-32 border-t border-gray-800 pt-16">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-[#6C63FF] to-[#4A45B2] text-transparent bg-clip-text">
                        Frequently Asked Questions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-gray-800 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">
                                How does GemCar AI work?
                            </h3>
                            <p className="text-gray-400">
                                Our platform uses advanced AI technology to match you with the
                                perfect car based on your preferences, budget, and needs. We
                                analyze thousands of listings to ensure you get the best deals.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-gray-800 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">
                                Is my information secure?
                            </h3>
                            <p className="text-gray-400">
                                Absolutely! We use bank-level encryption to protect your data.
                                Your personal and financial information is never shared without
                                your explicit consent.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-gray-800 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">
                                When will GemCar AI launch?
                            </h3>
                            <p className="text-gray-400">
                                We're currently in the final stages of development. Join our
                                waitlist to be among the first to know when we launch and get
                                exclusive early access!
                            </p>
                        </div>

                        <div className="bg-white/5 border border-gray-800 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">
                                What makes GemCar AI different?
                            </h3>
                            <p className="text-gray-400">
                                Unlike traditional car buying platforms, we leverage AI to
                                provide personalized recommendations, verify listings
                                automatically, and ensure transparent pricing with no hidden
                                fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaitListPage;