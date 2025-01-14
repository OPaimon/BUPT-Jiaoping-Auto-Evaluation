function log(message) {
    console.log('[Auto Evaluation] ' + message);
}

function autoSelectRatings() {
    const rows = document.querySelectorAll('tr');
    if (rows.length === 0) {
        log('未找到评价选项！');
        return;
    }
    const validOptions = ["完全符合", "基本符合", "不确定"];
    rows.forEach(row => {
        const radios = row.querySelectorAll('input[type="radio"]');
        if (radios.length > 0) {
            const validRadios = Array.from(radios).filter(radio => {
                const label = radio.nextSibling.textContent.trim();
                return validOptions.includes(label);
            });
            if (validRadios.length > 0) {
                const randomIndex = Math.floor(Math.random() * validRadios.length);
                const selectedRadio = validRadios[randomIndex];
                selectedRadio.checked = true;
                const label = selectedRadio.nextSibling.textContent.trim();
                log(`选择选项：${label}`);
            }
        }
    });
    log('自动选择完成！');
}

function autoFillComments() {
    const comments = [
        "老师认真负责",
        "老师非常有耐心",
        "老师教学水平高",
        "老师能够调动上课积极性",
        "老师思路清晰",
        "老师治学严谨",
        "课程案例丰富",
        "课堂内容充实合理",
        "课程理论和实际相结合",
        "课堂氛围轻松愉快"
    ];
    const checkboxes = document.querySelectorAll('input[name="zgpyids"]');
    if (checkboxes.length === 0) {
        log('未找到主观评语复选框！');
        return;
    }
    const selectedComments = new Set();
    while (selectedComments.size < Math.floor(Math.random() * 3) + 3) {
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        selectedComments.add(randomComment);
    }
    checkboxes.forEach(checkbox => {
        if (selectedComments.has(checkbox.nextSibling.nodeValue.trim())) {
            checkbox.checked = true;
            log(`选择主观评语：${checkbox.nextSibling.nodeValue.trim()}`);
        }
    });
}

function autoFillSuggestions() {
    const suggestions = [
        "希望老师能够增加一些实际案例的分析",
        "希望老师能够放慢语速，方便理解",
        "希望老师能够增加课堂互动",
        "希望老师能够提供更多的学习资源",
        "希望老师能够减少作业量"
    ];
    const highlights = [
        "老师的教学方法非常有效",
        "老师的课堂氛围非常活跃",
        "老师的知识点讲解非常清晰",
        "老师的课程内容非常实用",
        "老师的教学态度非常认真"
    ];
    const suggestionTextarea = document.querySelector('textarea[name="jynr"]');
    const highlightTextarea = document.querySelectorAll('textarea[name="jynr"]')[1];
    if (!suggestionTextarea || !highlightTextarea) {
        log('未找到改进建议或亮点的文本框！');
        return;
    }
    suggestionTextarea.value = suggestions[Math.floor(Math.random() * suggestions.length)];
    highlightTextarea.value = highlights[Math.floor(Math.random() * highlights.length)];
    log(`填写改进建议：${suggestionTextarea.value}`);
    log(`填写教学亮点：${highlightTextarea.value}`);
}

function main() {
    log('开始自动评价...');
    autoSelectRatings();
    autoFillComments();
    autoFillSuggestions();
    log('自动评价完成！');
}

// 执行主函数
main();
