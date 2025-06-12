
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "bit"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "שם מלא נדרש";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "מספר טלפון נדרש";
    } else if (!/^[\d\-\s\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "מספר טלפון לא תקין";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "אימייל נדרש";
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      newErrors.email = "אימייל לא תקין";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  interface RegistrationFormData {
    name: string;
    phone: string;
    email: string;
    paymentMethod: string;
  }

  interface RegistrationFormErrors {
    name?: string;
    phone?: string;
    email?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  type ErrorField = keyof RegistrationFormErrors;

  interface HandleInputChangeArgs {
    field: keyof RegistrationFormData;
    value: string;
  }

  const handleInputChange = (
    field: keyof RegistrationFormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (["name", "phone", "email"].includes(field)) {
      const errorField = field as ErrorField;
      if (errors[errorField]) {
        setErrors(prev => ({ ...prev, [errorField]: undefined }));
      }
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white" id="registration">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-none shadow-2xl bg-[#F5E8CD]">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-[#A4864F] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-[#3b3b3b]">הרישום הושלם בהצלחה!</h2>
                
                <div className="space-y-4 text-neutral-600">
                  <p className="text-lg">
                    תודה לך {formData.name} על ההרשמה לערב המיוחד "מסע החיים שלי"
                  </p>
                  <p>
                    פרטי האירוע נשלחו אליך במייל: {formData.email}
                  </p>
                  <p>
                    נתראה ביום ראשון, 14 בספטמבר 2025, באשכול פייס בת ים בשעה 18:00
                  </p>
                </div>

                <div className="bg-[#F5D9A5] rounded-xl p-6">
                  <h3 className="font-bold text-[#A4864F] mb-2">מה הלאה?</h3>
                  <ul className="text-sm text-[#A4864F] space-y-1 text-right">
                    <li>• תקבלי אישור במייל עם כל הפרטים</li>
                    <li>• הודעת תזכורת תישלח שבוע לפני האירוע</li>
                    <li>• לשאלות: 052-1234567</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="registration">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3b3b3b] mb-6">
            <span className="bg-gradient-to-r from-[#CAAB73] to-[#A4864F] bg-clip-text text-transparent">
              שמרי את מקומך
            </span>
          </h2>
          <p className="text-xl text-neutral-600">
            רק כמה שדות קצרים והכל יהיה מוכן!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-none shadow-2xl bg-[#F5E8CD]/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge className="bg-[#CAAB73] text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  מחיר מוקדם: ₪93
                </Badge>
              </div>
              <CardTitle className="text-2xl text-[#3b3b3b]">רישום לערב "מסע החיים שלי"</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium text-[#3b3b3b]">שם מלא *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="הכניסי את שמך המלא"
                    className={`h-12 text-lg bg-white ${errors.name ? 'border-red-500' : 'border-[#F5D9A5]'}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-medium text-[#3b3b3b]">מספר טלפון *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="050-1234567"
                    className={`h-12 text-lg bg-white ${errors.phone ? 'border-red-500' : 'border-[#F5D9A5]'}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-medium text-[#3b3b3b]">אימייל *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="example@email.com"
                    className={`h-12 text-lg bg-white ${errors.email ? 'border-red-500' : 'border-[#F5D9A5]'}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium text-[#3b3b3b]">אמצעי תשלום</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border-2 border-[#F5D9A5] rounded-xl p-4 hover:border-[#CAAB73] transition-colors">
                      <RadioGroupItem value="bit" id="bit" />
                      <Label htmlFor="bit" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Smartphone className="w-5 h-5 text-[#A4864F]" />
                        <span>Bit</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border-2 border-[#F5D9A5] rounded-xl p-4 hover:border-[#CAAB73] transition-colors">
                      <RadioGroupItem value="paybox" id="paybox" />
                      <Label htmlFor="paybox" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="w-5 h-5 text-[#A4864F]" />
                        <span>Paybox</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-xl font-semibold bg-[#CAAB73] hover:bg-[#A4864F] text-white rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      מעבד תשלום...
                    </div>
                  ) : (
                    "המשך לתשלום"
                  )}
                </Button>

                <div className="text-center text-sm text-neutral-500 space-y-1">
                  <p>✓ תשלום מאובטח ומוצפן</p>
                  <p>✓ אישור מיידי במייל</p>
                  <p>✓ ביטול עד 48 שעות לפני האירוע</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
