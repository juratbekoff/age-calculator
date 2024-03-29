"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
class IELTSScoreCalculator {
    constructor() {
        this.conversionTable = {
            listening: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 2.5,
                5: 2.5,
                6: 3.0,
                7: 3.0,
                8: 3.5,
                9: 3.5,
                10: 4.0,
                11: 4.0,
                12: 4.0,
                13: 4.5,
                14: 4.5,
                15: 4.5,
                16: 5.0,
                17: 5.0,
                18: 5.5,
                19: 5.5,
                20: 5.5,
                21: 5.5,
                22: 5.5,
                23: 6.0,
                24: 6.0,
                25: 6.0,
                26: 6.5,
                27: 6.5,
                28: 6.5,
                29: 6.5,
                30: 7.0,
                31: 7.0,
                32: 7.5,
                33: 7.5,
                34: 7.5,
                35: 8.0,
                36: 8.0,
                37: 8.5,
                38: 8.5,
                39: 9.0,
                40: 9.0,
            },
            reading: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 2.5,
                5: 2.5,
                6: 3.0,
                7: 3.0,
                8: 3.5,
                9: 3.5,
                10: 4.0,
                11: 4.0,
                12: 4.0,
                13: 4.5,
                14: 4.5,
                15: 5.0,
                16: 5.0,
                17: 5.0,
                18: 5.0,
                19: 5.5,
                20: 5.5,
                21: 5.5,
                22: 5.5,
                23: 6.0,
                24: 6.0,
                25: 6.0,
                26: 6.0,
                27: 6.5,
                28: 6.5,
                29: 6.5,
                30: 7.0,
                31: 7.0,
                32: 7.0,
                33: 7.5,
                34: 7.5,
                35: 8.0,
                36: 8.0,
                37: 8.5,
                38: 8.5,
                39: 9.0,
                40: 9.0,
            },
        };
    }
    convertToScore(correctCount, section) {
        if (!this.conversionTable[section].hasOwnProperty(correctCount)) {
            throw new Error("Invalid correct count for conversion.");
        }
        return this.conversionTable[section][correctCount];
    }
    calculateScore(score) {
        let residual = score - Math.trunc(score);
        let overall = 0;
        if (residual === 0) {
            overall = score;
        }
        else if (residual >= 0.25 && residual < 0.75) {
            overall = Math.floor(score) + 0.5;
        }
        else if (residual <= 0.25) {
            overall = Math.floor(score);
        }
        else if (residual >= 0.75) {
            overall = Math.ceil(score);
        }
        return overall;
    }
    calculateWritingScore(task1, task2) {
        const score = (task1 + task2 + task2) / 3;
        return this.calculateScore(score);
    }
    overallScore(listeningCorrect, readingCorrect, writingTasks, speaking) {
        const listeningScore = this.convertToScore(listeningCorrect, "listening");
        const readingScore = this.convertToScore(readingCorrect, "reading");
        const writingScore = this.calculateWritingScore(writingTasks.task1, writingTasks.task2);
        let calc = (listeningScore + readingScore + writingScore + speaking) / 4;
        return this.calculateScore(calc).toFixed(1);
    }
}
exports.calculate = new IELTSScoreCalculator();
//# sourceMappingURL=index.js.map