//詳盡註解版
//立即執行函式
; (function () {
  //小步測試 反覆驗證
  //第三階段 變數 空陣列
  let bmiHistoryData = [];
  //第二階段 變數物件
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
  };
  //第二階段函式
  function bmiStatesText(bmiState) {//--bmiState會抓取到'overThin'.'normal'....
    //bmiState由每次執行的if判斷式來帶入對應的值
    //驗證現在bmiState由if判斷式代入的字串
    console.log(bmiState);
    //第二階段印出答案
    console.log(`您的體重${bmiStatesData[bmiState].state}，健康指數為${bmiStatesData[bmiState].color}`);
  };
  //第三階段函式
  function addData(bmi, state) {//--(bmi,state)各別被if判斷式內的 addData(bmi,'字串')代入
    let obj = {};//-->第三階段 變數 空物件
    obj.objBmi = bmi;//-->物件內新增objBmi屬性值等於bmi
    obj.objState = state;//-->物件內新增objState屬性值等於參數代入的'字串'
    bmiHistoryData.push(obj)//-->將整個物件新增入bmiHistoryData陣列內
    console.log(bmiHistoryData);//--驗證此陣列有無新增物件
  };
  //第一階段函式
  function printBmi(height, weight) {
    //let weight = 80;
    //let height = 174;
    //bmi公式.toFixed(2)小數點後兩位
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    console.log(bmi)

    //第一階段 判斷式
    if (18.5 > bmi) {
      //overThin
      bmiStatesText('overThin');//-->overThin被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重過輕，健康指數為藍色');//-->已優化到bmiStatesText函式
      //第三階段 執行函式
      addData(bmi, 'overThin');//--代入參數到函式addData(bmi, state)
    } else if (18.5 <= bmi && bmi < 24) {
      //normal 
      bmiStatesText('normal')//-->normal被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重正常，健康指數為紅色');//-->已優化到bmiStatesText函式
      //第三階段 執行函式
      addData(bmi, 'normal');//--代入參數到函式addData(bmi, state)
    } else if (24 <= bmi && bmi < 27) {
      //overWeight 
      bmiStatesText('overWeight')//-->overWeight被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重過重');//-->已優化到bmiStatesText函式
      addData(bmi, 'overWeight');//--代入參數到函式addData(bmi, state)
    } else if (27 <= bmi && bmi < 30) {
      //mildFat 
      bmiStatesText('mildFat')//-->mildFat被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重輕度肥胖');//-->已優化到bmiStatesText函式
      addData(bmi, 'mildFat');//--代入參數到函式addData(bmi, state)
    } else if (30 <= bmi && bmi < 35) {
      //moderateFat 
      bmiStatesText('moderateFat')//-->moderateFat被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重中度肥胖');//-->已優化到bmiStatesText函式
      addData(bmi, 'moderateFat');//--代入參數到函式addData(bmi, state)
    } else if (35 <= bmi) {
      //severeFat 
      bmiStatesText('severeFat')//-->severeFat被帶入到bmiStatesText函式的參數bmiState
      //console.log('您的體重重度肥胖');//-->已優化到bmiStatesText函式
      addData(bmi, 'severeFat');//--代入參數到函式addData(bmi, state)
    } else {
      console.log('您的數值輸入錯誤，請重新輸入');
    }
  };

  //第三階段函式
  //[bmiHistoryData.length-1]讀第幾個陣列的意思 因為從0開始算
  //[bmiHistoryData[bmiHistoryData.length-1].objState]=bmiHistoryData[0,1...]的objState值'overThin'.'normal'....
  //bmiStatesData['overThin'].state=過輕
  //健康指數同理
  function showHistoryData() {
    console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為
          ${bmiHistoryData[bmiHistoryData.length - 1].objBmi}，體重${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].objState].state}！健康指數為${bmiStatesData[bmiHistoryData[bmiHistoryData.length - 1].objState].color}！`);
  };
  //第一階段 全部印出資訊
  //第二階段印出全部並代入bmiStatesData變數物件屬性值 答案在bmiStatesText函式內
  //第三階段印出前三個+showHistoryData();
  printBmi(178, 20);//-代入參數到函式printBmi(height, weight)
  printBmi(178, 70);//-代入參數到函式printBmi(height, weight)
  printBmi(178, 85);//-代入參數到函式printBmi(height, weight)
  //printBmi(178, 90);//-代入參數到函式printBmi(height, weight)
  //printBmi(178, 110);//-代入參數到函式printBmi(height, weight)
  //printBmi(178, 130);//-代入參數到函式printBmi(height, weight)
  //printBmi("身高", "體重");//-代入參數到函式printBmi(height, weight)
  showHistoryData();//執行函式
})()