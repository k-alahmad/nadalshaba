import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const lnglocal = localStorage.getItem("lng");

i18n.use(initReactI18next).init({
	resources: {
		ar: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				Russian: "Русский",
				code: "Ar",
				home: "الرئيسية",
				Payment: "Payment",
				"About project": "About project",
				Gallery: "Gallery",
				"Floor Plan": "Floor Plan",
				Nearby: "Nearby",
				Location: "Location",
				"Contact Us": "Contact Us",
				exit: "خروج",
				cancel: "الغاء",
				ok: "موافق",
				menu: "القائمة",
				register: "سجل الآن",
				download: "تحميل",
				HeaderTitleOne: "انغمس في تجربة تناشد الحواس",
				HeaderSubTitleOne:
					"و تنعّم بإقامة باعثة على الاسترخاء حيث تحيط بك المياه الرقراقة من كلّ حدبٍ و صوب",
				HeaderTitleTwo: "مناظر خلاّبة تأسر القلوب",
				HeaderSubTitleTwo:
					"تم تصميم المجمّع على شكل هلال مدبّب و ينعكس تصميمه الرائع بأبهى حلّة على المياه المتلألئة, حيث يمكنك أن تمتّع ناظريك بأروع الإطلالات بينما تستمع بإقامة في مسكن ينضح فخامة.",
				HeaderMainTitle: "مساكن تخاطب الروح",
				palm: "نخلة الجميرة",
				airport: "مطار دبي الدولي",
				khalifa: "برج خليفة",
				frame: "إطار دبي",
				businessBay: "الخليج التجاري",
				opera: "دار الاوبرا",
				meydan: "نادي دبي لسباق الخيل",
				dubaiMall: "مول دبي",
				heartland: "مدارس دولية",
				minutes: "دقيقة",
				nearbyTitle: "وصول سهل الى المعالم الرئيسية",
				nearbySubTitle:
					"موقع مميز في قلب دبي يوفر سهولة الوصول الى معظم المعالم الرئيسية",
				slogan: "احجز فيلتك في هذا الموقع المذهل",
				formSubTitle: "أحد عملائنا سيقوم بالاتصال بك باسرع وقت",
				brochurDownload: "تحميل الكتيب",
				formFullName: "الاسم الكامل",
				formPhoneNumber: "رقم الموبايل",
				formEmail: "الايميل",
				PaymentPlan: "خطة الدفع",
				PaymentPlanType: "خطة الدفع بعد التسليم",
				BookingAmount: "الدفعة النهائية",
				installments: " 6 دفعات كل ستة أشهر",
				finalInsallment: "مبلغ الحجز",
				price: "بأسعار تبدأ من",
				floorTitle: "مخطط الطابق و الوحدات",
				floorBedroom: "غرفة نوم",
				floorTotalSaleable: "مجموع المساحة القابلة للبيع",
				floorSuite: "جناح",
				floorBalcony: "البلكون",
				floorTotal: "المجموع",
				address: "مكتب 609 ، برج كلوفر باي - 6 أ مراسي - الخليج التجاري - دبي",
				locationTitle: "المخطط الرئيسي للموقع",
				brochurMSG: "الرجاء التسجيل لتنزيل الكتيب",
				roomCode: "كود: ",
			},
		},
		en: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				Russian: "Русский",
				code: "En",
				home: "Home",
				Payment: "Payment",
				"About project": "About project",
				Gallery: "Gallery",
				"Floor Plan": "Floor Plan",
				Nearby: "Nearby",
				Location: "Location",
				"Contact Us": "Contact Us",
				exit: "Exit",
				cancel: "Cancel",
				ok: "Ok",
				menu: "Menu",
				register: "Register Now",
				download: "Download",
				roomCode: "Code: ",
				HeaderTitleOne: "Unveil a soul-stirring experience",
				HeaderSubTitleOne:
					"as you surrender to the enchanting call of the water in your vicinity",
				HeaderTitleTwo: "A spectacular sight that delights",
				HeaderSubTitleTwo:
					"Designed like a tapered crescent, catch the reflected hues of the cluster, dazzle in the reflections of the crystal-clear water as you unwind in luxury",
				HeaderMainTitle: "Specially Designed Residences",
				palm: "Plam Jumeirah",
				airport: "Dubai Airport",
				khalifa: "Khalifa Tower",
				frame: "Duabi Frame",
				businessBay: "Business Bay",
				opera: "Dubai Opera",
				meydan: "Medydan Race Course",
				dubaiMall: "Dubai Mall",
				heartland: "International Schools",
				minutes: "Minutes",
				nearbyTitle: "EASY ACCESS TO KEY LANDMARKS",
				nearbySubTitle: "Distinguished Location, Right in the Center of Dubai",
				slogan: "Book Your Villa in This Spactacular Location",
				formSubTitle: "One of Our Agents will contact you very shortly",
				brochurDownload: "Download Brochure",
				formFullName: "Full Name",
				formPhoneNumber: "Phone Number",
				formEmail: "Email",
				PaymentPlan: "Payment Plan",
				PaymentPlanType: "Post-Handover payment plan",
				BookingAmount: "Booking Amount",
				installments: " 6 Installments every sixth month",
				finalInsallment: "Final Installment",
				price: "Starting Price",
				floorTitle: "FLOOR PLAN AND UNIT PLANS",
				floorBedroom: "BR",
				floorTotalSaleable: "TOTAL SALEABLE AREA",
				floorSuite: "SUITE",
				floorBalcony: "BALCONY",
				floorTotal: "TOTAL",
				address:
					" Office 609, Clover Bay Tower - 6a Marasi Dr - Business Bay - Dubai",
				locationTitle: "Site Location Masterplan",
				brochurMSG: "Please Register to Download the Brochure",
			},
		},
		fa: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				Russian: "Русский",
				code: "Fa",
				home: "خانه",
				Payment: "Payment",
				"About project": "About project",
				Gallery: "Gallery",
				"Floor Plan": "Floor Plan",
				Nearby: "Nearby",
				Location: "Location",
				"Contact Us": "Contact Us",
				exit: "خروجی",
				cancel: "کانسل",
				ok: "بله",
				menu: "منو",
				register: "ثبت نام",
				download: "دانلود",
				HeaderTitleOne: "پرده برداری از یک تجربه منحصر به فرد",
				HeaderSubTitleOne: "دید ابدی به دریاچه و فضای سبز",
				HeaderTitleTwo: "منظره دیدنی",
				HeaderSubTitleTwo:
					"امکانات منحصر به فرد و لاکچری شامل دریاچه مصنوعی ، فضای سبز ، کلاب گلف ...غیره",
				HeaderMainTitle: "طراحی خاص ومتفاوت فضای مسکونی",
				palm: "پالم جمیرا",
				airport: "فرودگاه دبی",
				khalifa: "برج خلیفه",
				frame: "قاب دبی",
				businessBay: "خلیج تجاری",
				opera: "اپرای دبی",
				meydan: "میدان مسابقه میدان",
				dubaiMall: "دبی مال",
				heartland: "مدارس بین المللی",
				minutes: "دقیقه",
				nearbyTitle: "دسترسی ها به نقاط کلیدی",
				nearbySubTitle: "موقعیت مکانی ممتاز، درست در مرکز دبی",
				slogan: "داشتن خانه رویایی تان را به واقعیت تبدیل میکنیم",
				formSubTitle:
					"یکی از مشاوران ما در کوتاه ترین زمان ممکن با شما تماس خواهد گرفت",
				brochurDownload: "دانلود بروشور",
				formFullName: "نام و نام خانوادگی",
				formPhoneNumber: "شماره تلفون",
				formEmail: "ایمیل",
				PaymentPlan: "نحوه پرداخت اقساط",
				PaymentPlanType: "اقساط پس از تحویل",
				BookingAmount: "قسط اخر",
				installments: " ۶ قسط به فاصله ۶ ماه از یکدیگر",
				finalInsallment: "میزان بیعانه",
				price: "شروع قیمت از",
				floorTitle: "پلان طبقات و واحد ها",
				floorBedroom: "خوابه",
				floorTotalSaleable: "متراژ کل",
				floorSuite: "سوئیت",
				floorBalcony: "بالکن",
				floorTotal: "کل",
				address: "دبی - بیزینس بی - ساختمان کلاور بی - واحد ۶۰۹",
				locationTitle: "موقعیت پروژه و مستر پلان",
				brochurMSG: "لطفا برای دانلود بروشور ثبت نام کنید",
				roomCode: "کد: ",
			},
		},
		ru: {
			translation: {
				English: "English",
				Arabic: "العربية",
				Persian: "فارسی",
				Russian: "Русский",
				code: "Ru",
				home: "Главная",
				Payment: "оплата",
				"About project": "О проекте",
				Gallery: "Галерея",
				"Floor Plan": "поэтажный план",
				Nearby: "Рядом",
				Location: "расположение",
				"Contact Us": "связаться с нами",
				exit: "Выход",
				cancel: "Отмена",
				ok: "Дальше ",
				menu: "Меню",
				register: "Зарегистрироваться",
				download: "Скачать",
				roomCode: "Code: ",
				HeaderTitleOne: "Unveil a soul-stirring experience",
				HeaderSubTitleOne:
					"as you surrender to the enchanting call of the water in your vicinity",
				HeaderTitleTwo: "A spectacular sight that delights",
				HeaderSubTitleTwo:
					"Designed like a tapered crescent, catch the reflected hues of the cluster, dazzle in the reflections of the crystal-clear water as you unwind in luxury",
				HeaderMainTitle: "Specially Designed Residences",
				palm: "Plam Jumeirah",
				airport: "Dubai Airport",
				khalifa: "Khalifa Tower",
				frame: "Duabi Frame",
				businessBay: "Business Bay",
				opera: "Dubai Opera",
				meydan: "Medydan Race Course",
				dubaiMall: "Dubai Mall",
				heartland: "International Schools",
				minutes: "Minutes",
				nearbyTitle: "EASY ACCESS TO KEY LANDMARKS",
				nearbySubTitle: "Distinguished Location, Right in the Center of Dubai",
				slogan: "преврати дом своей мечты в реальность",
				formSubTitle: "Один из наших агентов свяжется с вами в ближайшее время",
				brochurDownload: "Скачать брошюру",
				formFullName: "Полное имя",
				formPhoneNumber: "номер телефонаr",
				formEmail: "Электронная почта",
				PaymentPlan: "Payment Plan",
				PaymentPlanType: "Post-Handover payment plan",
				BookingAmount: "Booking Amount",
				installments: " 6 Installments every sixth month",
				finalInsallment: "Final Installment",
				price: "Starting Price",
				floorTitle: "FLOOR PLAN AND UNIT PLANS",
				floorBedroom: "BR",
				floorTotalSaleable: "TOTAL SALEABLE AREA",
				floorSuite: "SUITE",
				floorBalcony: "BALCONY",
				floorTotal: "TOTAL",
				address:
					"Офис 609, Clover Bay Tower – 6a Marasi Dr – Business Bay – Дубай",
				locationTitle: "Site Location Masterplan",
				brochurMSG: "Пожалуйста, зарегистрируйтесь, чтобы скачать брошюру",
			},
		},
	},
	lng: lnglocal ?? "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});
