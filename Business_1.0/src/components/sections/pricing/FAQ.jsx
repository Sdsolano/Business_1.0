// components/sections/pricing/FAQ.jsx - Modernizado para conversiones
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Clock,
  DollarSign,
  Users,
  MessageSquare,
  Star,
  Award,
  TrendingUp,
  Phone,
  Mail
} from 'lucide-react';
import Button from '../../ui/Button';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Primera pregunta abierta por defecto

  const faqs = [
    {
      question: "¿Necesito tener conocimientos técnicos para implementar Octopus AI?",
      answer: "Absolutamente no. Nosotros nos encargamos de toda la configuración técnica de principio a fin. Solo necesitas contarnos cómo quieres que funcione tu asistente y nosotros nos ocupamos del resto. Incluimos training completo para tu equipo sin costo adicional.",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
      highlight: "Setup 100% manejado por nosotros",
      tags: ["Sin conocimiento técnico", "Training incluido", "Soporte completo"]
    },
    {
      question: "¿Cuánto tiempo toma implementar una solución?",
      answer: "En la mayoría de los casos, tu asistente estará configurado y funcionando en 24-48 horas máximo. Para proyectos personalizados complejos, el tiempo puede ser de 1-2 semanas. Te damos una fecha exacta antes de empezar y la cumplimos.",
      icon: Clock,
      color: "from-green-500 to-emerald-600",
      highlight: "Listo en 24-48 horas",
      tags: ["Setup rápido", "Fechas garantizadas", "Sin demoras"]
    },
    {
      question: "¿Puedo integrar el asistente con mis sistemas actuales?",
      answer: "Sí, nuestras soluciones se integran perfectamente con CRMs, sistemas de reservas, plataformas de e-commerce, calendarios y prácticamente cualquier herramienta que ya utilices. Si usas un sistema específico, podemos crear la integración.",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      highlight: "Integra con todo",
      tags: ["CRM compatible", "APIs flexibles", "Sistemas existentes"]
    },
    {
      question: "¿El asistente puede transferir conversaciones a un humano?",
      answer: "Por supuesto. Configuramos reglas inteligentes para determinar cuándo una conversación debe ser escalada a un agente humano. Puede ser por complejidad de la consulta, solicitud del cliente, o palabras clave específicas que definas.",
      icon: MessageSquare,
      color: "from-orange-500 to-red-600",
      highlight: "Escalación inteligente",
      tags: ["Transferencia suave", "Reglas personalizadas", "Backup humano"]
    },
    {
      question: "¿Existe algún compromiso de permanencia o contrato largo?",
      answer: "No, todos nuestros planes son mensuales y puedes cancelar cuando quieras sin penalizaciones ni costos ocultos. Nos enfocamos en ganar tu confianza con resultados excepcionales, no con contratos que te aten.",
      icon: Shield,
      color: "from-teal-500 to-cyan-600",
      highlight: "Sin compromisos",
      tags: ["Cancelación libre", "Sin contratos", "Sin penalizaciones"]
    },
    {
      question: "¿Qué garantías ofrecen si no veo resultados?",
      answer: "Ofrecemos garantía de satisfacción de 30 días. Si en el primer mes no ves mejoras measurables en tu atención al cliente o no estás satisfecho por cualquier razón, te devolvemos tu dinero completo. Además, garantizamos ROI positivo en 90 días.",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      highlight: "Garantía 30 días",
      tags: ["Dinero de vuelta", "ROI garantizado", "Sin riesgos"]
    },
    {
      question: "¿Cómo manejan la seguridad y privacidad de los datos?",
      answer: "La seguridad es nuestra prioridad #1. Usamos encriptación AES-256, cumplimos con GDPR y LGPD, realizamos auditorías regulares y nunca compartimos información de clientes. Tus datos y los de tus clientes están 100% protegidos.",
      icon: Shield,
      color: "from-green-500 to-teal-600",
      highlight: "Seguridad militar",
      tags: ["GDPR compliant", "Encriptación AES-256", "Auditorías regulares"]
    },
    {
      question: "¿Puedo ver ejemplos reales funcionando antes de decidir?",
      answer: "¡Absolutamente! Tenemos demos interactivos en vivo en nuestra página de servicios. Además, podemos hacer una demostración personalizada con casos específicos de tu industria. También te conectamos con clientes actuales para que veas resultados reales.",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      highlight: "Demos en vivo",
      tags: ["Prueba real", "Casos de éxito", "Demo personalizada"]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de preguntas */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZmFxLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48dGV4dCB4PSIyMCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+Pz88L3RleHQ+PHRleHQgeD0iNjAiIHk9IjcwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMTBiOTgxIiBmaWxsLW9wYWNpdHk9IjAuMDUiPiE8L3RleHQ+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2ZhcS1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={HelpCircle}>Resolvemos tus dudas</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-blue-400">
                Preguntas Frecuentes
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Resolvemos todas las dudas que surgen antes de tomar la mejor decisión para tu negocio. 
              <span className="text-green-400 font-semibold"> Si no encuentras tu respuesta, contáctanos</span>.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect sutil */}
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${faq.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  
                  <motion.div
                    className={`relative bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' 
                        : 'border-gray-700/50 hover:border-purple-500/30'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Pregunta clickeable */}
                    <motion.button
                      className="w-full p-6 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                      whileTap={{ scale: 0.995 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start flex-1">
                          <motion.div 
                            className={`bg-gradient-to-br ${faq.color} p-3 rounded-xl mr-4 flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                              {faq.question}
                            </h3>
                            
                            {/* Highlight badge */}
                            <div className="flex items-center space-x-2">
                              <span className={`inline-block bg-gradient-to-r ${faq.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                {faq.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          className="text-purple-400 ml-4"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-6 w-6" />
                        </motion.div>
                      </div>
                    </motion.button>
                    
                    {/* Respuesta expandible */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-700/50 pt-6">
                              <p className="text-gray-300 leading-relaxed mb-4">
                                {faq.answer}
                              </p>
                              
                              {/* Tags de beneficios */}
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <motion.span
                                    key={tagIndex}
                                    className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: tagIndex * 0.05 }}
                                  >
                                    ✓ {tag}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-900/30 via-gray-800/50 to-green-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nuestro equipo está disponible 24/7 para resolver cualquier duda específica sobre tu caso. 
              Te respondemos en menos de 2 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button.Action to="/contact">
                <MessageSquare className="h-5 w-5 mr-2" />
                Hablar con un especialista
              </Button.Action>
              
              <Button.Secondary href="https://wa.me/1234567890">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp directo
              </Button.Secondary>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {[
                "📞 Respuesta en 2 horas máximo",
                "💬 Soporte en español 24/7", 
                "🎯 Consulta sin compromiso",
                "✅ +500 empresas nos eligieron"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;