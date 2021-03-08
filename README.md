# jsWeek4
https://wujunghan.github.io/jsWeek4/

練功題目：BMI Kata
請依照影片內容與 excel BMI 規則、流程圖，依照以下三階段來練習此題目。



第一階段：請寫 printBmi 函式，並印出對應狀態
printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」
第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」


常見QA


Q：一定要做到第三階段，才能提交作業嗎？

A：對的



Q：我對題目不太懂，有解答嗎？

A：有的，請依照此影片的三階段影片，跟著做十遍



Q：我可以優化程式碼嗎？

A：可以，但各階段的指示要做到，例如

第一階段要寫 printBMI 函式
第二階段要運用到該bmiStatesData 變數
第三階段要新增 bmiHistoryData 變數儲存計算資訊


Q：要多快才有達工程師門檻？

A：在 10min 內
