// ===============================
// PASSWORD GENERATOR
// script.js
// ===============================

// Elementos

const passwordInput = document.getElementById("password");
const generateButton = document.getElementById("generatePassword");
const copyButton = document.getElementById("copyPassword");
const showButton = document.getElementById("showPassword");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strengthLevel = document.getElementById("strengthLevel");
const strengthText = document.getElementById("strengthText");

// Caracteres

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SYMBOL = "!@#$%&*()-_=+[]{}<>?/";

// Atualiza tamanho

lengthSlider.addEventListener("input", () => {

    lengthValue.textContent = lengthSlider.value;

        if(passwordInput.value !== ""){

                updateStrength(passwordInput.value);

                    }

                    });

                    // Número aleatório seguro

                    function secureRandom(max){

                        const array = new Uint32Array(1);

                            crypto.getRandomValues(array);

                                return array[0] % max;

                                }

                                // Embaralhar

                                function shuffle(array){

                                    for(let i = array.length - 1; i > 0; i--){

                                            const j = secureRandom(i + 1);

                                                    [array[i], array[j]] = [array[j], array[i]];

                                                        }

                                                            return array;

                                                            }

                                                            // Gerar senha

                                                            function generatePassword(){

                                                                let pool = "";

                                                                    const password = [];

                                                                        if(uppercase.checked){

                                                                                pool += UPPER;

                                                                                        password.push(UPPER[secureRandom(UPPER.length)]);

                                                                                            }

                                                                                                if(lowercase.checked){

                                                                                                        pool += LOWER;

                                                                                                                password.push(LOWER[secureRandom(LOWER.length)]);

                                                                                                                    }

                                                                                                                        if(numbers.checked){

                                                                                                                                pool += NUMBER;

                                                                                                                                        password.push(NUMBER[secureRandom(NUMBER.length)]);

                                                                                                                                            }

                                                                                                                                                if(symbols.checked){

                                                                                                                                                        pool += SYMBOL;

                                                                                                                                                                password.push(SYMBOL[secureRandom(SYMBOL.length)]);

                                                                                                                                                                    }

                                                                                                                                                                        if(pool === ""){

                                                                                                                                                                                alert("Selecione pelo menos uma opção.");

                                                                                                                                                                                        return;

                                                                                                                                                                                            }

                                                                                                                                                                                                while(password.length < Number(lengthSlider.value)){

                                                                                                                                                                                                        password.push(pool[secureRandom(pool.length)]);

                                                                                                                                                                                                            }

                                                                                                                                                                                                                const finalPassword = shuffle(password).join("");

                                                                                                                                                                                                                    passwordInput.value = finalPassword;

                                                                                                                                                                                                                        updateStrength(finalPassword);

                                                                                                                                                                                                                        }

                                                                                                                                                                                                                        // Força

                                                                                                                                                                                                                        function updateStrength(password){

                                                                                                                                                                                                                            let score = 0;

                                                                                                                                                                                                                                if(password.length >= 8) score++;

                                                                                                                                                                                                                                    if(password.length >= 12) score++;

                                                                                                                                                                                                                                        if(password.length >= 16) score++;

                                                                                                                                                                                                                                            if(/[A-Z]/.test(password)) score++;

                                                                                                                                                                                                                                                if(/[a-z]/.test(password)) score++;

                                                                                                                                                                                                                                                    if(/[0-9]/.test(password)) score++;

                                                                                                                                                                                                                                                        if(/[^A-Za-z0-9]/.test(password)) score++;

                                                                                                                                                                                                                                                            if(score <= 3){

                                                                                                                                                                                                                                                                    strengthLevel.style.width = "30%";

                                                                                                                                                                                                                                                                            strengthLevel.style.background = "#ef4444";

                                                                                                                                                                                                                                                                                    strengthText.textContent = "Fraca";

                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                            else if(score <= 5){

                                                                                                                                                                                                                                                                                                    strengthLevel.style.width = "65%";

                                                                                                                                                                                                                                                                                                            strengthLevel.style.background = "#f59e0b";

                                                                                                                                                                                                                                                                                                                    strengthText.textContent = "Média";

                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                            else{

                                                                                                                                                                                                                                                                                                                                    strengthLevel.style.width = "100%";

                                                                                                                                                                                                                                                                                                                                            strengthLevel.style.background = "#22c55e";

                                                                                                                                                                                                                                                                                                                                                    strengthText.textContent = "Forte";

                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                        // Copiar

                                                                                                                                                                                                                                                                                                                                                        copyButton.addEventListener("click", async () => {

                                                                                                                                                                                                                                                                                                                                                            if(passwordInput.value === "") return;

                                                                                                                                                                                                                                                                                                                                                                await navigator.clipboard.writeText(passwordInput.value);

                                                                                                                                                                                                                                                                                                                                                                    const old = copyButton.textContent;

                                                                                                                                                                                                                                                                                                                                                                        copyButton.textContent = "✔";

                                                                                                                                                                                                                                                                                                                                                                            setTimeout(()=>{

                                                                                                                                                                                                                                                                                                                                                                                    copyButton.textContent = old;

                                                                                                                                                                                                                                                                                                                                                                                        },1200);

                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                        // Mostrar senha

                                                                                                                                                                                                                                                                                                                                                                                        showButton.addEventListener("click",()=>{

                                                                                                                                                                                                                                                                                                                                                                                            if(passwordInput.type === "password"){

                                                                                                                                                                                                                                                                                                                                                                                                    passwordInput.type = "text";

                                                                                                                                                                                                                                                                                                                                                                                                            showButton.textContent = "🙈";

                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                    else{

                                                                                                                                                                                                                                                                                                                                                                                                                            passwordInput.type = "password";

                                                                                                                                                                                                                                                                                                                                                                                                                                    showButton.textContent = "👁️";

                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                                        // Gerar

                                                                                                                                                                                                                                                                                                                                                                                                                                        generateButton.addEventListener("click",generatePassword);

                                                                                                                                                                                                                                                                                                                                                                                                                                        // Atualizar força ao mudar opções

                                                                                                                                                                                                                                                                                                                                                                                                                                        [
                                                                                                                                                                                                                                                                                                                                                                                                                                        uppercase,
                                                                                                                                                                                                                                                                                                                                                                                                                                        lowercase,
                                                                                                                                                                                                                                                                                                                                                                                                                                        numbers,
                                                                                                                                                                                                                                                                                                                                                                                                                                        symbols

                                                                                                                                                                                                                                                                                                                                                                                                                                        ].forEach(item=>{

                                                                                                                                                                                                                                                                                                                                                                                                                                            item.addEventListener("change",()=>{

                                                                                                                                                                                                                                                                                                                                                                                                                                                    if(passwordInput.value){

                                                                                                                                                                                                                                                                                                                                                                                                                                                                updateStrength(passwordInput.value);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Primeira senha

                                                                                                                                                                                                                                                                                                                                                                                                                                                                            generatePassword();