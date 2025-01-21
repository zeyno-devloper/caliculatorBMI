function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "يرجى إدخال قيم صحيحة للوزن والطول.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "نقص في الوزن";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "وزن طبيعي";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "زيادة في الوزن";
    } else {
        category = "سمنة";
    }

    document.getElementById('result').innerText = `كتلة الجسم (BMI): ${bmi.toFixed(2)} - التصنيف: ${category}`;
}

function calculateWHtR() {
    // الحصول على قيم محيط الخصر والطول من المدخلات
    const waist = parseFloat(document.getElementById("waist").value);
    const height = parseFloat(document.getElementById("height").value);

    // التحقق من إدخال القيم الصحيحة
    if (isNaN(waist) || isNaN(height) || waist <= 0 || height <= 0) {
        document.getElementById("result").innerText = "الرجاء إدخال قيم صحيحة للخصر والطول.";
        return;
    }

    // حساب نسبة الخصر إلى الطول
    const whtr = waist / height;

    // تحديد التفسير بناءً على القيمة
    let interpretation;
    if (whtr < 0.4) {
        interpretation = "نقص في الدهون.";
    } else if (whtr >= 0.4 && whtr < 0.5) {
        interpretation = "نسبة طبيعية (دهون صحية).";
    } else if (whtr >= 0.5 && whtr < 0.6) {
        interpretation = "زيادة دهون (زيادة خطر الإصابة بأمراض).";
    } else {
        interpretation = "نسبة مرتفعة جدًا (خطر كبير للإصابة بالأمراض).";
    }

    // عرض النتيجة على المستخدم
    document.getElementById("result").innerHTML = `
        <p>نسبة الخصر إلى الطول (WHtR): ${whtr.toFixed(2)}</p>
        <p>${interpretation}</p>
    `;
}
