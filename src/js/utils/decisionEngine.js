
// Seuils réglementaires (fictifs basés sur standards UE)
export const THRESHOLDS = {
    lead: { limit: 3.0, unit: 'ppm', name: 'Plomb (Pb)' },
    cadmium: { limit: 1.0, unit: 'ppm', name: 'Cadmium (Cd)' },
    arsenic: { limit: 1.0, unit: 'ppm', name: 'Arsenic (As)' },
    mercury: { limit: 0.1, unit: 'ppm', name: 'Mercure (Hg)' },
    purity: { limit: 98.0, unit: '%', name: 'Pureté', type: 'min' }
};

export function simulateAnalysis(type) {
    // Generate random data based on simulation type
    const data = {};

    if (type === 'compliant') {
        data.lead = 0.5;
        data.cadmium = 0.2;
        data.arsenic = 0.1;
        data.mercury = 0.01;
        data.purity = 99.5;
    } else if (type === 'borderline') {
        data.lead = 2.8; // Close to 3.0
        data.cadmium = 0.9; // Close to 1.0
        data.arsenic = 0.8;
        data.mercury = 0.05;
        data.purity = 98.1; // Close to 98.0
    } else {
        data.lead = 4.5; // Exceeds 3.0
        data.cadmium = 0.5;
        data.arsenic = 1.2; // Exceeds 1.0
        data.mercury = 0.02;
        data.purity = 96.0; // Below 98.0
    }

    return data;
}

export function evaluateMaterial(analysisData) {
    const result = {
        status: 'ACCEPTABLE', // ACCEPTABLE, CONDITIONAL, REJECTED
        score: 100,
        rules: [],
        details: []
    };

    // Check each threshold
    // Lead
    checkThreshold(result, analysisData.lead, THRESHOLDS.lead, 'max');
    checkThreshold(result, analysisData.cadmium, THRESHOLDS.cadmium, 'max');
    checkThreshold(result, analysisData.arsenic, THRESHOLDS.arsenic, 'max');
    checkThreshold(result, analysisData.mercury, THRESHOLDS.mercury, 'max');
    checkThreshold(result, analysisData.purity, THRESHOLDS.purity, 'min');

    // Determine final status
    const failedCritical = result.details.some(d => d.severity === 'CRITICAL');
    const failedWarning = result.details.some(d => d.severity === 'WARNING');

    if (failedCritical) {
        result.status = 'REJECTED';
        result.summary = "La matière ne respecte pas les seuils de sécurité sanitaire critiques.";
    } else if (failedWarning) {
        result.status = 'CONDITIONAL';
        result.summary = "La matière présente des paramètres proches des limites ou des non-conformités mineures.";
    } else {
        result.status = 'ACCEPTABLE';
        result.summary = "La matière est conforme à toutes les spécifications.";
    }

    return result;
}

function checkThreshold(result, value, rule, type) {
    const isCompliance = type === 'max' ? value <= rule.limit : value >= rule.limit;
    const isWarning = type === 'max' ? value > (rule.limit * 0.8) && value <= rule.limit : value < (rule.limit * 1.05) && value >= rule.limit;

    const detail = {
        param: rule.name,
        value: value,
        limit: rule.limit,
        unit: rule.unit,
        compliant: isCompliance,
        severity: 'OK'
    };

    if (!isCompliance) {
        detail.severity = 'CRITICAL';
        result.rules.push(`Non-conformité : ${rule.name} (${value} ${rule.unit}) dépasse la limite (${rule.limit} ${rule.unit})`);
    } else if (isWarning) {
        detail.severity = 'WARNING';
        result.rules.push(`Attention : ${rule.name} (${value} ${rule.unit}) est proche de la limite (${rule.limit} ${rule.unit})`);
    }

    result.details.push(detail);
}
