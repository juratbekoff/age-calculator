declare class IELTSScoreCalculator {
    private conversionTable;
    constructor();
    private convertToScore;
    private calculateScore;
    private calculateWritingScore;
    overallScore(listeningCorrect: number, readingCorrect: number, writingTasks: {
        task1: number;
        task2: number;
    }, speaking: number): string;
}
export declare const calculate: IELTSScoreCalculator;
export {};
