import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
      newErrors.name = 'שם מלא נדרש';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'מספר טלפון נדרש';
    } else if (!/^[\d\-\s\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'אימייל נדרש';
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
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

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  interface SendEmailResponse {
    ok: boolean;
    status: number;
    statusText: string;
  }

  const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response: SendEmailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send email');

      await new Promise((r: (value: unknown) => void) => setTimeout(r, 1500)); // Hold before redirect
      window.location.href =
        'https://secure.cardcom.solutions/EA/EA5/qiYKgUWmWEuNsbwy4Zo4jw/PaymentSP';
    } catch (error) {
      console.error(error);
      alert('אירעה שגיאה בשליחת הטופס');
    } finally {
      setIsSubmitting(false);
    }
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
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (['name', 'phone', 'email'].includes(field)) {
      const errorField = field as ErrorField;
      if (errors[errorField]) {
        setErrors((prev) => ({ ...prev, [errorField]: undefined }));
      }
    }
  };

  return (
    <section dir='rtl' className='py-20 bg-white' id='registration'>
      <div className='max-w-3xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-[#3b3b3b] mb-6'>
            <span className='bg-gradient-to-r from-[#CAAB73] to-[#664c43] bg-clip-text text-transparent leading-12'>
              לא סתם הגעת עד לכאן - הגיע הזמן לבחור בך
              <div className='text-[#664c43]'>"כשמספרי החיים פגשו את הלב-</div>
              <div className='text-[#664c43]'>נולד מופע שהוא מתנה לעצמך"</div>
              מחכה ומצפה לראותך ולתת לך חיבוק אישי חם ואוהב
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            dir='rtl'
            className='border-none shadow-2xl bg-[#F5E8CD]/60 backdrop-blur-sm'
          >
            <CardHeader className='text-center pb-6'>
              <div className='flex items-center justify-center gap-3 mb-4'>
                <Badge className='bg-[#CAAB73] text-white text-base px-4 py-2'>
                  <Sparkles className='w-4 h-4 mr-2' />
                  עלות הרשמה מוקדמת 99 ש"ח
                  <Sparkles className='w-4 h-4 ml-2' />
                </Badge>
              </div>
              <CardTitle className='text-2xl text-[#3b3b3b]'>
                {' '}
                רישום לאירוע המופע "מסע חיי"{' '}
              </CardTitle>
            </CardHeader>

            <CardContent className='space-y-6'>
              <form
                onSubmit={handleSubmit}
                dir='rtl'
                className='space-y-6 text-right'
              >
                {/* Name Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='name'
                    className='text-lg font-medium text-[#3b3b3b]'
                  >
                    שם מלא *
                  </Label>
                  <Input
                    id='name'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder='הכניסי את שמך המלא'
                    className={`h-12 text-lg bg-white ${
                      errors.name ? 'border-red-500' : 'border-[#F5D9A5]'
                    }`}
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='phone'
                    className='text-lg font-medium text-[#3b3b3b]'
                  >
                    מספר טלפון *
                  </Label>
                  <Input
                    id='phone'
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder='050-1234567'
                    className={`h-12 text-lg bg-white ${
                      errors.phone ? 'border-red-500' : 'border-[#F5D9A5]'
                    }`}
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='text-lg font-medium text-[#3b3b3b]'
                  >
                    אימייל *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder='example@email.com'
                    className={`h-12 text-lg bg-white ${
                      errors.email ? 'border-red-500' : 'border-[#F5D9A5]'
                    }`}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='mt-5 w-full h-14 text-xl font-semibold bg-[#CAAB73] hover:bg-[#664c43] text-white rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl'
                >
                  {isSubmitting ? (
                    <div className='flex items-center justify-center gap-2 '>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white' />
                      מעבד תשלום...
                    </div>
                  ) : (
                    'המשך לתשלום'
                  )}
                </Button>

                <div className='text-right text-sm text-neutral-500 space-y-1'>
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
