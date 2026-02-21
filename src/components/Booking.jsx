import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Booking = () => {
   const [step, setStep] = useState(1);
   const [formData, setFormData] = useState({
      audience: '',
      location: '',
      name: '',
      role: '',
      email: '',
      phone: '',
      notes: ''
   });

   const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
   const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
   const handleSubmit = (e) => {
      e.preventDefault();
      setStep(4); // Success step
   };

   return (
      <section id="booking" className="py-24 md:py-32 bg-neutral-50 relative border-t border-neutral-200">
         <div className="max-w-[800px] mx-auto px-4 md:px-6 relative z-10">

            <Reveal>
               <div className="text-center mb-16">
                  <h2 className="text-xs font-bold text-secondary-600 uppercase tracking-[0.3em] mb-6">Booking Process</h2>
                  <h3 className="text-4xl md:text-5xl font-sans font-medium text-primary-900 mb-6">Request a Speaker</h3>
                  <p className="text-neutral-500 font-light text-lg max-w-xl mx-auto">
                     Let's tailor this program to your needs. Fill out the details below and we will respond with availability within 48 hours.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="bg-white p-6 md:p-12 border border-neutral-200 rounded-sm shadow-xl relative overflow-hidden">

                  {/* Progress Bar */}
                  {step < 4 && (
                     <div className="absolute top-0 left-0 w-full h-1 bg-neutral-100">
                        <div
                           className="h-full bg-secondary-500 transition-all duration-500 ease-out"
                           style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                     </div>
                  )}

                  <form onSubmit={(e) => { e.preventDefault(); if (step === 3) handleSubmit(e); else nextStep(); }} className="space-y-8 mt-4">

                     {/* Step 1: Audience */}
                     {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                           <h4 className="text-2xl font-sans font-medium text-primary-900 mb-8">Step 1: Who are you booking for?</h4>
                           <div className="space-y-4">
                              {['High School Students', 'Parent Group', 'Staff / Leadership', 'Corporate / Organization', 'Other'].map((opt) => (
                                 <label key={opt} className={`flex items-center p-5 border rounded-sm cursor-pointer transition-all ${formData.audience === opt ? 'border-secondary-500 bg-secondary-50/30' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'}`}>
                                    <input
                                       type="radio"
                                       name="audience"
                                       value={opt}
                                       checked={formData.audience === opt}
                                       onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                                       className="w-5 h-5 text-secondary-500 border-neutral-300 focus:ring-secondary-500"
                                       required
                                    />
                                    <span className="ml-4 font-medium text-primary-900">{opt}</span>
                                 </label>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Step 2: Location */}
                     {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                           <h4 className="text-2xl font-sans font-medium text-primary-900 mb-8">Step 2: Where are you located?</h4>
                           <div className="space-y-6">
                              <div className="space-y-2 group">
                                 <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">City / Region</label>
                                 <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm"
                                    placeholder="e.g. Surrey, BC"
                                 />
                              </div>
                           </div>
                        </div>
                     )}

                     {/* Step 3: Contact & Details */}
                     {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                           <h4 className="text-2xl font-sans font-medium text-primary-900 mb-8">Step 3: Contact Details & Dates</h4>

                           <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <div className="space-y-2 group">
                                 <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Full Name</label>
                                 <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="John Doe" />
                              </div>
                              <div className="space-y-2 group">
                                 <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Role / Organization</label>
                                 <input type="text" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="Principal, Teacher, etc." />
                              </div>
                           </div>

                           <div className="grid md:grid-cols-2 gap-6 mb-6">
                              <div className="space-y-2 group">
                                 <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Email</label>
                                 <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="email@school.com" />
                              </div>
                              <div className="space-y-2 group">
                                 <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Phone</label>
                                 <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="(555) 555-5555" />
                              </div>
                           </div>

                           <div className="space-y-2 group">
                              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-focus-within:text-secondary-600 transition-colors">Ideal Dates & Formatting Notes</label>
                              <textarea rows="4" required value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full p-4 bg-neutral-50 border border-neutral-200 text-primary-900 focus:outline-none focus:border-secondary-500 transition-all placeholder:text-neutral-400 rounded-sm" placeholder="e.g. Mid-October, looking for a 60 min keynote..."></textarea>
                           </div>
                        </div>
                     )}

                     {/* Step 4: Success */}
                     {step === 4 && (
                        <div className="animate-in fade-in zoom-in-95 duration-500 text-center py-12">
                           <div className="w-20 h-20 bg-secondary-50 text-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
                              <CheckCircle2 size={40} />
                           </div>
                           <h4 className="text-3xl font-sans font-medium text-primary-900 mb-4">Request Submitted</h4>
                           <p className="text-neutral-500 leading-relaxed max-w-sm mx-auto mb-8">
                              Thank you for reaching out. We will review your details and get back to you with availability within 48 hours.
                           </p>
                           <button
                              type="button"
                              onClick={() => { setStep(1); setFormData({ audience: '', location: '', name: '', role: '', email: '', phone: '', notes: '' }); }}
                              className="text-sm font-bold uppercase tracking-[0.1em] text-primary-900 hover:text-secondary-600 border-b border-primary-900 transition-colors pb-1"
                           >
                              Submit Another Request
                           </button>
                        </div>
                     )}

                     {/* Navigation Buttons */}
                     {step < 4 && (
                        <div className="flex items-center justify-between pt-8 border-t border-neutral-100 mt-10">
                           {step > 1 ? (
                              <button
                                 type="button"
                                 onClick={prevStep}
                                 className="flex items-center gap-2 text-neutral-500 hover:text-primary-900 font-bold text-xs uppercase tracking-widest transition-colors py-3"
                              >
                                 <ArrowLeft size={14} /> Back
                              </button>
                           ) : (
                              <div></div>
                           )}

                           <button
                              type="submit"
                              className="flex items-center gap-3 bg-primary-900 hover:bg-secondary-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-xl"
                           >
                              {step === 3 ? 'Submit Request' : 'Continue'} {step < 3 && <ArrowRight size={14} />}
                           </button>
                        </div>
                     )}

                  </form>
               </div>
            </Reveal>

         </div>
      </section>
   );
};

export default Booking;
