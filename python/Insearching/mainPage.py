# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'e:\test-sources\python\Insearching\mainPage.ui'
#
# Created by: PyQt5 UI code generator 5.10.1
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_mainPage(object):
    def setupUi(self, mainPage):
        mainPage.setObjectName("mainPage")
        mainPage.resize(763, 560)
        self.run = QtWidgets.QPushButton(mainPage)
        self.run.setGeometry(QtCore.QRect(40, 470, 681, 41))
        self.run.setObjectName("run")
        self.searchs_result = QtWidgets.QTextEdit(mainPage)
        self.searchs_result.setGeometry(QtCore.QRect(40, 60, 681, 101))
        self.searchs_result.setObjectName("searchs_result")
        self.redetected = QtWidgets.QPushButton(mainPage)
        self.redetected.setGeometry(QtCore.QRect(40, 410, 681, 41))
        self.redetected.setObjectName("redetected")
        self.label = QtWidgets.QLabel(mainPage)
        self.label.setGeometry(QtCore.QRect(40, 30, 91, 16))
        self.label.setObjectName("label")
        self.label_2 = QtWidgets.QLabel(mainPage)
        self.label_2.setGeometry(QtCore.QRect(40, 190, 101, 16))
        self.label_2.setObjectName("label_2")
        self.urls_result = QtWidgets.QTextEdit(mainPage)
        self.urls_result.setGeometry(QtCore.QRect(40, 220, 681, 101))
        self.urls_result.setObjectName("urls_result")
        self.textBrowser = QtWidgets.QTextBrowser(mainPage)
        self.textBrowser.setGeometry(QtCore.QRect(40, 340, 681, 51))
        self.textBrowser.setObjectName("textBrowser")

        self.retranslateUi(mainPage)
        QtCore.QMetaObject.connectSlotsByName(mainPage)

    def retranslateUi(self, mainPage):
        _translate = QtCore.QCoreApplication.translate
        mainPage.setWindowTitle(_translate("mainPage", "WizardPage"))
        mainPage.setTitle(_translate("mainPage", "Demo"))
        mainPage.setSubTitle(_translate("mainPage", "Demo"))
        self.run.setText(_translate("mainPage", "Run！"))
        self.searchs_result.setHtml(_translate("mainPage", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'SimSun\'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
        self.redetected.setText(_translate("mainPage", "Redetected"))
        self.label.setText(_translate("mainPage", "Searchs:"))
        self.label_2.setText(_translate("mainPage", "Search urls:"))
        self.urls_result.setHtml(_translate("mainPage", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'SimSun\'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"><br /></p></body></html>"))
        self.textBrowser.setHtml(_translate("mainPage", "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0//EN\" \"http://www.w3.org/TR/REC-html40/strict.dtd\">\n"
"<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\">\n"
"p, li { white-space: pre-wrap; }\n"
"</style></head><body style=\" font-family:\'SimSun\'; font-size:9pt; font-weight:400; font-style:normal;\">\n"
"<p style=\" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\">Welcome!</p></body></html>"))

