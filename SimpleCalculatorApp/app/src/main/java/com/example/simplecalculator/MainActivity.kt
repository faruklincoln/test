package com.example.simplecalculator

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private val calculator = Calculator()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val num1 = findViewById<EditText>(R.id.editTextNumber1)
        val num2 = findViewById<EditText>(R.id.editTextNumber2)
        val resultView = findViewById<TextView>(R.id.textViewResult)

        val addButton = findViewById<Button>(R.id.buttonAdd)
        val subButton = findViewById<Button>(R.id.buttonSub)
        val mulButton = findViewById<Button>(R.id.buttonMul)
        val divButton = findViewById<Button>(R.id.buttonDiv)

        addButton.setOnClickListener { performOperation(num1, num2, resultView) { a, b -> calculator.add(a, b) } }
        subButton.setOnClickListener { performOperation(num1, num2, resultView) { a, b -> calculator.subtract(a, b) } }
        mulButton.setOnClickListener { performOperation(num1, num2, resultView) { a, b -> calculator.multiply(a, b) } }
        divButton.setOnClickListener { performOperation(num1, num2, resultView) { a, b -> calculator.divide(a, b) } }
    }

    private fun performOperation(num1: EditText, num2: EditText, resultView: TextView, op: (Double, Double) -> Double) {
        val a = num1.text.toString().toDoubleOrNull() ?: 0.0
        val b = num2.text.toString().toDoubleOrNull() ?: 0.0
        resultView.text = op(a, b).toString()
    }
}
