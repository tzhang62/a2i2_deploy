// Function to handle person selection
function selectPerson(person) {
    // Store selected person in session storage
    sessionStorage.setItem('selectedPerson', person);
    
    // Redirect to chat page using relative path (works on any domain)
    window.location.href = 'chat.html';
} 