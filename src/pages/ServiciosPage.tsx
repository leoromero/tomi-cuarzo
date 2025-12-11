import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import BackgroundImageBlock from '../components/BackgroundImageBlock';
import HeroImage from '../assets/servicios-1.jpg';
import SecondaryImage from '../assets/servicios-2.jpg';
import ThirdImage from '../assets/servicios-3.jpg';
import IconAuriculares from '../assets/icono-auriculares.png';
import IconCalculos from '../assets/icono-calculos.png';
import IconCertificaciones from '../assets/icono-certificaciones.png';
import IconDiseno from '../assets/icono-diseño.png';
import IconEngranaje from '../assets/icono-engranaje.png';
import IconMensaje from '../assets/icono-mensaje.png';
import IconRayo from '../assets/icono-rayo.png';
import IconReloj from '../assets/icono-reloj.png';

const beneficios = [
  { icon: IconMensaje, label: 'Un solo interlocutor' },
  { icon: IconReloj, label: 'Mayor vida útil de las instalaciones' },
  { icon: IconCalculos, label: 'Costo cierto de trabajo' },
  { icon: IconRayo, label: 'Ahorro en costos de energía' },
  { icon: IconEngranaje, label: 'Optimización en la renovación de equipos' },
  {
    icon: IconDiseno,
    label: 'Ejecución y dirección técnica de obras de mediana envergadura',
  },
  {
    icon: IconAuriculares,
    label: 'Asesoramiento técnico completo y permanente',
  },
  {
    icon: IconCertificaciones,
    label: 'Acompañamiento en procesos de certificación',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

interface EnergyMetricProps {
  value: number;
  label: string;
  delay?: number;
}

const EnergyMetric = ({
  value: target,
  label,
  delay = 0,
}: EnergyMetricProps) => {
  const value = useMotionValue(0);
  const rounded = useTransform(value, latest => Math.round(latest));
  const width = useTransform(
    value,
    latest => `${Math.min(Math.max(latest, 0), 100)}%`
  );
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(value, target, {
      duration: 1.2,
      delay,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [value, target, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', latest => setDisplayValue(latest));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.div
      className="space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-end gap-3">
        <span className="text-4xl font-semibold text-brand-footer md:text-5xl">
          {displayValue}%
        </span>
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-brand-accent/30">
          <motion.div
            className="h-full origin-left bg-brand-accent"
            style={{ width, transformOrigin: 'left' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>
      <p className="text-base font-medium leading-snug text-brand-footer md:text-lg md:leading-relaxed md:text-brand-footer/90">
        {label}
      </p>
    </motion.div>
  );
};

const ServiciosPage = () => (
  <div className="-mx-6 -mt-24">
    <motion.div
      className="relative -mx-0"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <BackgroundImageBlock
        imageSrc={HeroImage}
        alt="Equipo técnico configurando maquinaria industrial"
        className="flex min-h-[50vh] items-center bg-[length:180%_auto] md:min-h-[80vh] md:bg-cover"
        overlayClassName="bg-gradient-to-r from-black/70 via-black/60 to-transparent"
        contentClassName="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-24 text-white md:px-10"
        backgroundPosition="center"
      />

      {/* Mobile Vertical Line - extends from top to bottom including through title div */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent md:hidden"
        style={{ zIndex: 10 }}
      />

      {/* Mobile Title at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4 md:hidden"
        style={{ zIndex: 5 }}
      >
        <h1 className="relative z-20 text-3xl font-semibold text-white">
          Mantenimiento
        </h1>
      </div>
    </motion.div>

    <motion.section
      className="mx-auto mt-6 flex w-full max-w-5xl flex-col gap-3 px-6 text-left md:mt-8 md:gap-5 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.header
        className="space-y-3 text-left md:space-y-5"
        variants={fadeUp}
      >
        <motion.h2
          className="hidden text-3xl font-semibold text-brand-footer md:block md:text-4xl"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Mantenimiento
        </motion.h2>
        <motion.p
          className="w-full text-lg font-medium leading-snug text-brand-nav md:w-4/5 md:text-xl md:leading-relaxed md:text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          CUARZO 24 S.A realiza la gestión y operación integral de las
          instalaciones para la preservación de activos, ofrecemos soluciones de
          Ingeniería y Mantenimiento dirigidas a mejorar la productividad y la
          eficiencia de los recursos de nuestros clientes.
        </motion.p>
        <motion.p
          className="text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
        >
          Nuestro servicio comprende desde la gestión, la operación, el
          mantenimiento predictivo, preventivo y correctivo de las instalaciones
          técnicas. Ofrecemos, además, la Garantía Total: incluyendo la
          totalidad de la mano de obra, insumos y repuestos necesarios para
          prestar el servicio. También garantizamos resultados, a través de la
          implementación de indicadores de Calidad y Disponibilidad para cada
          servicio del contrato.
        </motion.p>
      </motion.header>

      <motion.div
        className="mt-10 grid gap-8 text-brand-footer md:grid-cols-2"
        variants={fadeUp}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        {beneficios.map(({ icon, label }, index) => (
          <motion.div
            key={label}
            className="flex items-start gap-4"
            variants={listItemVariants}
            transition={{ delay: index * 0.05 }}
          >
            <img src={icon} alt="" className="h-12 w-12 flex-shrink-0" />
            <span className="text-base font-medium leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-800">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    <motion.div
      className="relative mt-12"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <BackgroundImageBlock
        imageSrc={SecondaryImage}
        alt="Equipo técnico revisando planos de obra"
        className="flex min-h-[50vh] items-center justify-center bg-fixed bg-center bg-[length:190%_auto] md:min-h-[60vh] md:bg-cover"
        overlayClassName="bg-black/40"
        backgroundPosition="top"
      />

      {/* Mobile Vertical Line - extends from top to bottom including through title div */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent md:hidden"
        style={{ zIndex: 10 }}
      />

      {/* Mobile Title at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4 md:hidden"
        style={{ zIndex: 5 }}
      >
        <h1 className="relative z-20 text-3xl font-semibold text-white">
          Ingeniería e Infraestructura
        </h1>
      </div>
    </motion.div>

    <motion.section
      className="mx-auto mt-6 flex w-full max-w-5xl flex-col gap-3 px-6 text-left md:mt-8 md:gap-5 md:pb-16 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.header
        className="space-y-3 text-left md:space-y-5"
        variants={fadeUp}
      >
        <motion.h2
          className="hidden text-3xl font-semibold text-brand-footer md:block md:text-4xl"
          variants={fadeUp}
          transition={{ delay: 0.05 }}
        >
          Ingeniería e Infraestructura
        </motion.h2>
        <motion.p
          className="w-full text-base font-medium leading-snug text-brand-nav md:w-4/5 md:text-lg md:leading-relaxed md:text-gray-700"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          Brindamos la ejecución de Proyectos, Dirección y Conducción Técnica,
          cálculos y dimensionado, y Montaje de Instalaciones Especiales:
        </motion.p>
      </motion.header>

      <motion.ul
        className="space-y-1 text-base leading-snug text-brand-nav md:text-lg md:leading-relaxed md:text-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        {[
          'Eléctricas (grupos electrógenos, UPS, señales débiles).',
          'Sanitarias (Red de agua, cloacas, pluviales).',
          'Aire acondicionado.',
          'Gases Medicinales.',
          'Detección y Extinción de incendio.',
          'Redes de vapor.',
          'Ascensores y Montacargas.',
          'Generación de Vacío y Aire Comprimido.',
          'Análisis químicos en red de agua potable.',
        ].map(item => (
          <motion.li
            key={item}
            className="flex gap-2"
            variants={listItemVariants}
            transition={{ duration: 0.4 }}
          >
            <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-nav md:bg-brand-footer" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="w-full space-y-1 text-base leading-snug text-brand-nav md:w-4/6 md:text-lg md:leading-relaxed md:text-gray-700"
        variants={fadeUp}
        transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
      >
        <motion.p variants={fadeUp}>
          Relevamiento y confección de pliegos para desarrollo de planes de
          remodelación y refuncionalización interno.
        </motion.p>
        <motion.p variants={fadeUp} transition={{ delay: 0.05 }}>
          Planes de pintura.
        </motion.p>
        <motion.p variants={fadeUp} transition={{ delay: 0.1 }}>
          Planes de Optimización de Superficies.
        </motion.p>
      </motion.div>
    </motion.section>

    <motion.div
      className="relative mt-12"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <BackgroundImageBlock
        imageSrc={ThirdImage}
        alt="Instalación de paneles solares en obra"
        className="flex min-h-[50vh] items-center justify-center bg-fixed bg-center bg-[length:210%_auto] md:min-h-[60vh] md:bg-cover"
        overlayClassName="bg-black/35"
        backgroundPosition="top"
      />

      {/* Mobile Vertical Line - extends from top to bottom including through title div */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-accent md:hidden"
        style={{ zIndex: 10 }}
      />

      {/* Mobile Title at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-brand-nav px-6 py-4 md:hidden"
        style={{ zIndex: 5 }}
      >
        <h1 className="relative z-20 text-3xl font-semibold text-white">
          Energía
        </h1>
      </div>
    </motion.div>

    <motion.section
      className="mx-auto mt-6 flex w-full max-w-4xl flex-col gap-3 px-6 pb-16 text-left md:mt-8 md:gap-4 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.header
        className="space-y-3 md:space-y-4"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        <motion.h2
          className="hidden text-3xl font-semibold text-brand-footer md:block md:text-4xl"
          variants={fadeUp}
        >
          Energía
        </motion.h2>
        <motion.p
          className="w-full text-base leading-snug text-brand-nav md:max-w-3xl md:text-lg md:leading-relaxed md:text-gray-700"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          Gestión integral y operación de infraestructura energética, incluyendo
          la evaluación de desempeño, eficiencia y sustentabilidad. Desarrollo e
          implementación de tableros de control para el análisis de vectores
          energéticos, con el objetivo de optimizar el uso de recursos,
          identificar oportunidades de mejora continua y facilitar la toma de
          decisiones.
        </motion.p>
      </motion.header>
      <EnergyMetric value={100} label="Respeto al medio ambiente" delay={0.2} />
    </motion.section>
  </div>
);

export default ServiciosPage;
