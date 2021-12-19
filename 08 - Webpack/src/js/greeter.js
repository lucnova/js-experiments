export const Greeter = (greetWho = 'there') => {
    const greeterDiv = document.createElement('p');
    greeterDiv.textContent = `Hey ${greetWho}!`;

    return greeterDiv;
}