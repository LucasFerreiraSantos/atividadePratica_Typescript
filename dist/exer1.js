function average(num1, num2) {
    const averageFinal = (num1 + num2) / 2;
    if (averageFinal >= 6) {
        const objeto = {
            averageF: averageFinal,
            situation: true
        };
        return objeto;
    }
    else if (averageFinal < 6) {
        return { averageF: averageFinal, situation: false };
    }
}
average(10, 9);
