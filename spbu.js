document.addEventListener("DOMContentLoaded", function () {
    const suhuNav = document.getElementById("suhu-nav");
    const spbuNav = document.getElementById("spbu-nav");

    const suhuContainer = document.getElementById("suhu-container");
    const spbuContainer = document.getElementById("spbu-container");

    const checkSuhuButton = document.getElementById("checkSuhu");
    const inputSuhu = document.getElementById("inputSuhu");
    const hasilSuhu = document.getElementById("hasilSuhu");

    const checkSPBUButton = document.getElementById("checkSPBU");
    const platKuning = document.getElementById("platKuning");
    const motor = document.getElementById("motor");
    const cc = document.getElementById("cc");
    const hasilSPBU = document.getElementById("hasilSPBU");

    suhuNav.addEventListener("click", function () {
        suhuContainer.style.display = "block";
        spbuContainer.style.display = "none";
    });

    spbuNav.addEventListener("click", function () {
        spbuContainer.style.display = "block";
        suhuContainer.style.display = "none";
    });

    checkSuhuButton.addEventListener("click", function () {
        const suhu = parseFloat(inputSuhu.value);

        if (suhu >= -100 && suhu <= 0) {
            hasilSuhu.innerText = "Air dalam keadaan beku";
        } else if (suhu >= 1 && suhu <= 100) {
            hasilSuhu.innerText = "Air dalam keadaan cair";
        } else if (suhu >= 101 && suhu <= 500) {
            hasilSuhu.innerText = "Air dalam keadaan uap";
        } else {
            hasilSuhu.innerText = "Suhu tidak terdefinisi";
        }
    });

    checkSPBUButton.addEventListener("click", function () {
        const platKuningValue = platKuning.checked;
        const motorValue = motor.checked;
        const ccValue = parseInt(cc.value);

        if (platKuningValue || motorValue) {
            hasilSPBU.innerText = "BBM subsidi";
        } else if (ccValue < 1500) {
            hasilSPBU.innerText = "Pertamax";
        } else {
            hasilSPBU.innerText = "Pertamax Turbo";
        }
    });
});
