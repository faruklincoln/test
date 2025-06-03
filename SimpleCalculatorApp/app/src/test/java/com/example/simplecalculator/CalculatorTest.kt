package com.example.simplecalculator

import org.junit.Assert.assertEquals
import org.junit.Test

class CalculatorTest {
    private val calculator = Calculator()

    @Test
    fun testAdd() {
        assertEquals(5.0, calculator.add(2.0, 3.0), 0.0001)
    }

    @Test
    fun testSubtract() {
        assertEquals(1.0, calculator.subtract(3.0, 2.0), 0.0001)
    }

    @Test
    fun testMultiply() {
        assertEquals(6.0, calculator.multiply(2.0, 3.0), 0.0001)
    }

    @Test
    fun testDivide() {
        assertEquals(2.0, calculator.divide(6.0, 3.0), 0.0001)
    }
}
