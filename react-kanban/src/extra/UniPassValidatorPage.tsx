import { useState } from "react";
import { checkPassword, isInBlacklist } from "unipass-validator/browser";

export function UniPassValidatorPage() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.trim() === "") {
      setAnalysis(null);
      return;
    }
    const result = checkPassword(value);
    setAnalysis(result);
  };

  const getScoreColor = (score: number) => {
    switch (score) {
      case 0: return "bg-red-500";
      case 1: return "bg-orange-400";
      case 2: return "bg-yellow-400";
      case 3: return "bg-green-400";
      case 4: return "bg-indigo-500";
      default: return "bg-gray-300";
    }
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          UniPass Validator
        </h2>

        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition mb-4"
        />

        {analysis && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Score:</span>
              <div className={`w-16 h-4 rounded-full ${getScoreColor(analysis.score)}`} />
            </div>

            <div>
              <span className="font-semibold text-gray-700">Crack Time:</span>
              <p className="text-gray-600">{analysis.crackTime}</p>
            </div>

            {analysis.warnings && (
              <div>
                <span className="font-semibold text-gray-700">Warnings:</span>
                <p className="text-red-500">{analysis.warnings}</p>
              </div>
            )}

            {analysis.suggestions.length > 0 && (
              <div>
                <span className="font-semibold text-gray-700">Suggestions:</span>
                <ul className="list-disc list-inside text-gray-600">
                  {analysis.suggestions.map((s: string, idx: number) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Blacklisted:</span>
              {analysis.blacklisted ? (
                <span className="text-red-500 font-bold">Yes</span>
              ) : (
                <span className="text-green-500 font-bold">No</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
