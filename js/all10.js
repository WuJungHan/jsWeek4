//立即執行函式
; (function () {
  //第三階段 變數 空陣列
  let bmiHistoryData = [];
  //第三階段 累計次數
  let count = 0;

  //第二階段 變數
  const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }

  //第三階段函式
  function addData(objBmi, objState) {
    obj = {};
    obj.objBmi = objBmi;
    obj.objState = objState;
    bmiHistoryData.push(obj);
    console.log(obj);
  }

  //第二階段函式
  function bmiStatesText(bmiState) {
    console.log(`您的體重${bmiStatesData[bmiState].state}，健康指數為${bmiStatesData[bmiState].color}`);
  }

  //第一階段函式
  function printBmi(height, weight) {
    count += 1;
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    console.log(bmi);
    if (bmi < 18.5) {
      //overThin
      //console.log('您的體重過輕，健康指數為藍色');
      bmiStatesText('overThin');
      addData(bmi, 'overThin')
    } else if (18.5 <= bmi && bmi < 24) {
      //normal
      //console.log('您的體重正常');
      bmiStatesText('normal');
      addData(bmi, 'normal')
    } else if (24 <= bmi && bmi < 27) {
      //overWeight
      //console.log('您的體重過重');
      bmiStatesText('overWeight');
      addData(bmi, 'overWeight')
    } else if (27 <= bmi && bmi < 30) {
      //mildFat
      //console.log('您的體重輕度肥胖');
      bmiStatesText('mildFat');
      addData(bmi, 'mildFat')
    } else if (30 <= bmi && bmi < 35) {
      //severeFat
      //console.log('您的體重中度肥胖');
      bmiStatesText('severeFat');
      addData(bmi, 'severeFat')
    } else if (35 <= bmi) {
      //moderateFat
      //console.log('您的體重重度肥胖');
      bmiStatesText('moderateFat');
      addData(bmi, 'overThin')
    } else {
      console.log('您的數值輸入錯誤，請重新輸入');
    }

  }

  //第三階段函式
  function showHistoryData() {
    console.log(`您總共計算 ${count} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[count - 1].objBmi}，體重${bmiStatesData[bmiHistoryData[count - 1].objState].state}！健康指數為${bmiStatesData[bmiHistoryData[count - 1].objState].color}！`)
  };

  //第一階段 全部印出資訊
  //第二階段印出全部並代入bmiStatesData變數物件屬性值 答案在bmiStatesText函式內
  //第三階段印出前三個+showHistoryData();
  printBmi(178, 20)// >> 印出 console.log 文字為「您的體重過輕」
  printBmi(178, 70)// >> 印出 console.log 文字為「您的體重正常」
  printBmi(178, 85)// >> 印出 console.log 文字為「您的體重過重」
  //printBmi(178, 90)// >> 印出 console.log 文字為「您的體重輕度肥胖」
  //printBmi(178, 110)// >> 印出 console.log 文字為「您的體重中度肥胖」
  //printBmi(178, 130)// >> 印出 console.log 文字為「您的體重重度肥胖」
  //printBmi("身高", "體重")// >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
  showHistoryData();

})()

