package com.douzone.smartlogistics.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Locale;

import org.springframework.context.i18n.LocaleContextHolder;

public class DateUtil {

	/** Date format */
	public static final String DATE_PATTERN = "yyyy-MM-dd";
	public static final String DATE_PATTERN_FORMAT = "yyyyMMdd";
	/** Time format */
	public static final String TIME_PATTERN = "HH:mm";
	/** Date Time format */
	public static final String DATE_TIME_PATTERN = "yyyy-MM-dd HH:mm";
	/** Date Time(HH:mm:ss) format */
	public static final String DATE_TIME_HMS_PATTERN = "yyyy-MM-dd HH:mm:ss";
	/** Date HMS format */
	public static final String DATE_HMS_FORMAT = "yyyyMMddHHmmss";
	/** Time stamp format */
	public static final String TIMESTAMP_FORMAT = "yyyyMMddHHmmssSSS";
	

	/**
	 * 현재 날짜를 가져온다.
	 * @return String 현재 날짜(yyyy-MM-dd)
	 */
	public static String getCurrentDay() {
		return getCurrentTime(DATE_PATTERN);
	}


	/**
	 * yyyy-MM-dd HH:mm 패턴의 현재 시간을 가져온다.
	 * @return String 현재 시간(yyyy-MM-dd HH:mm)
	 */
	public static String getCurrentTime() {
		return getCurrentTime(DATE_TIME_PATTERN);
	}
	
	/**
	 * yyyy-MM-dd HH:mm 패턴의 현재 시간을 가져온다.
	 * @return String 현재 시간(yyyy-MM-dd HH:mm)
	 */
	public static String getCurrentTimeHMS() {
		return getCurrentTime(DATE_TIME_HMS_PATTERN);
	}

	/**
	 * 주어진 패턴의 현재시간을 가져온다.
	 * @param pattern
	 * @return String pattern에 의한 현재 시간
	 */
	public static String getCurrentTime(String pattern) {
		LocalDateTime now = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
		return now.format(formatter);
	}

	/**
	 * 년도를 포함한 현재월을 가져온다.
	 * @return String 현재월(yyyy-MM)
	 */
	public static String getThisMonth() {
		return getCurrentTime("yyyy-MM");
	}

	/**
	 * 현재 년도를 가져온다.
	 * @return String 현재 년도 (yyyy)
	 */
	public static String getThisYear() {
		return getCurrentTime("yyyy");
	}

	/**
	 * 현재시간을 가져온다.
	 * @return String 현재시간 (HH:mm)
	 */
	public static String getCurrentHour() {
		return getCurrentTime(TIME_PATTERN);
	}
	
	/**
	 * 주어진 날짜 패턴의 현재 날짜를 가져온다.
	 * @param pattern
	 * @return String pattern에 의한 현재 날짜
	 */
	public static String getCurrentDay(String pattern) {
		return getCurrentTime(pattern);
	}
}
