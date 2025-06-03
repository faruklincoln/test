package com.example.simplecalculator

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val num1 = findViewById<EditText>(R.id.editTextNumber1)
        val num2 = findViewById<EditText>(R.id.editTextNumber2)
        val resultView = findViewById<TextView>(R.id.textViewResult)
        val addButton = findViewById<Button>(R.id.buttonAdd)

        addButton.setOnClickListener {
            val a = num1.text.toString().toDoubleOrNull() ?: 0.0
            val b = num2.text.toString().toDoubleOrNull() ?: 0.0
            resultView.text = (a + b).toString()
        }
    }
}
