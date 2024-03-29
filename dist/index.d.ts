export declare class IELTSScoreCalculator {
    private conversionTable;
    constructor();
    convertToScore(correctCount: number, section: string): number;
    private calculateScore;
    private calculateWritingScore;
    calculateOverallScore(listeningCorrect: number, readingCorrect: number, writingTasks: {
        task1: number;
        task2: number;
    }, speaking: number): string;
}
