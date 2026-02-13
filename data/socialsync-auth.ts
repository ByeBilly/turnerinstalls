export const authConfig = {
    // The Master Admin (You) - Always authorized across all sites
    masterEmail: "billiamglobal@gmail.com",

    // Liam's specific site access
    authorizedEmails: ["Liam@turnerinstalls.com"],

    // In a real app, this would be in an environment variable
    jwtSecret: "socialsync-prototype-secret-key-12345",
    // How long the session lasts (e.g., 7 days)
    sessionExpiry: "7d"
};
