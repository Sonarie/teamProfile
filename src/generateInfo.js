function generateInfo(answers) {
    return`
    ${answers.name}
    ${answers.role}
    ${answers.id}
    Send Email:${answers.email}
    Office number:${answers.officeNumber}
    GitHub:${answers.github}
    School:${answers.school}
    `;
}

module.exports = generateInfo